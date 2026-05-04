/**
 * Cliente Google Sheets — ERP do site.
 * Adaptado do padrão santifer-irepair/src/lib/airtable.ts:
 *   - Uma função getRecords*() por entidade
 *   - Filtro por view (CMSAstro)
 *   - Lista de fields explícita (reduz payload)
 *   - retryWithBackoff pra 429/503
 *   - Cache em memória entre fetches durante mesmo build
 */

import { google } from 'googleapis';
import {
  type IBairro, type IEvento, type IModelo, type IEspaco, type IPagina,
  IBairroFields, IEventoFields, IModeloFields, IEspacoFields, IPaginaFields,
  mapBairroFields, mapEventoFields, mapModeloFields, mapEspacoFields, mapPaginaFields,
} from './schema';

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID || '';
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY || '';

const VIEW_ATIVA = 'CMSAstro';

// =====================================================================
// Auth + cliente Sheets
// =====================================================================
let cachedSheetsClient: ReturnType<typeof google.sheets> | null = null;

function getSheetsClient() {
  if (cachedSheetsClient) return cachedSheetsClient;

  if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_KEY) {
    throw new Error(
      'GOOGLE_SHEETS_ID e GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY precisam estar definidos no .env'
    );
  }

  const credentials = JSON.parse(SERVICE_ACCOUNT_KEY);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  cachedSheetsClient = google.sheets({ version: 'v4', auth });
  return cachedSheetsClient;
}

// =====================================================================
// Retry com backoff exponencial
// =====================================================================
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  retries = 5,
  delayMs = 500
): Promise<T> {
  try {
    return await operation();
  } catch (error: any) {
    const status = error?.code || error?.response?.status;
    const retriable = status === 429 || status === 502 || status === 503;
    if (retries > 0 && retriable) {
      await delay(delayMs);
      return retryWithBackoff(operation, retries - 1, delayMs * 2);
    }
    throw error;
  }
}

// =====================================================================
// Reader genérico — lê uma aba e retorna array de objetos
// =====================================================================
async function readSheet(sheetName: string): Promise<Record<string, any>[]> {
  const sheets = getSheetsClient();
  const range = `${sheetName}!A:ZZ`;

  const fetchOp = async () => {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range,
    });
    return res.data.values || [];
  };

  const values = await retryWithBackoff(fetchOp);
  if (values.length < 2) return [];

  const [header, ...rows] = values;
  const headerNorm = header.map(h => String(h || '').trim());

  return rows
    .filter(row => row.length > 0 && row.some(cell => cell !== '' && cell != null))
    .map(row => {
      const obj: Record<string, any> = {};
      headerNorm.forEach((key, i) => {
        if (key) obj[key] = row[i];
      });
      return obj;
    });
}

// =====================================================================
// Cache em memória pra evitar refetch durante mesmo build
// =====================================================================
const cache = new Map<string, any[]>();

async function readSheetCached<T>(
  sheetName: string,
  mapper: (row: Record<string, any>) => T,
  filterIndexable = true
): Promise<T[]> {
  if (cache.has(sheetName)) return cache.get(sheetName) as T[];

  const rows = await readSheet(sheetName);
  let mapped = rows.map(mapper);

  if (filterIndexable) {
    mapped = mapped.filter((r: any) => r.view === VIEW_ATIVA && r.indexable === true);
  }

  cache.set(sheetName, mapped);
  return mapped;
}

// =====================================================================
// Getters por entidade
// =====================================================================
export async function getBairros(opts: { todasIndexabilidades?: boolean } = {}): Promise<IBairro[]> {
  return readSheetCached<IBairro>('Bairros', mapBairroFields, !opts.todasIndexabilidades);
}

export async function getEventos(opts: { todasIndexabilidades?: boolean } = {}): Promise<IEvento[]> {
  return readSheetCached<IEvento>('Eventos', mapEventoFields, !opts.todasIndexabilidades);
}

export async function getModelos(): Promise<IModelo[]> {
  // Modelos não tem view/indexable — sempre retorna todos
  if (cache.has('Modelos')) return cache.get('Modelos') as IModelo[];
  const rows = await readSheet('Modelos');
  const mapped = rows.map(mapModeloFields);
  cache.set('Modelos', mapped);
  return mapped;
}

export async function getEspacos(bairroSlug?: string): Promise<IEspaco[]> {
  const cacheKey = `Espacos:${bairroSlug || 'all'}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey) as IEspaco[];

  const rows = await readSheet('Espacos');
  let mapped = rows.map(mapEspacoFields);
  if (bairroSlug) mapped = mapped.filter(e => e.bairro === bairroSlug);

  cache.set(cacheKey, mapped);
  return mapped;
}

export async function getPaginas(opts: {
  todasIndexabilidades?: boolean;
  prioridadeMax?: 1 | 2 | 3;
} = {}): Promise<IPagina[]> {
  const all = await readSheetCached<IPagina>('Paginas', mapPaginaFields, !opts.todasIndexabilidades);
  if (opts.prioridadeMax) {
    return all.filter(p => p.prioridade_lancamento <= opts.prioridadeMax!);
  }
  return all;
}

export async function getPaginaBySlug(slugTotal: string): Promise<IPagina | null> {
  const all = await getPaginas({ todasIndexabilidades: true });
  return all.find(p => p.slug_total === slugTotal) || null;
}

// =====================================================================
// Reset cache (útil em dev / scripts standalone)
// =====================================================================
export function resetSheetsCache(): void {
  cache.clear();
}
