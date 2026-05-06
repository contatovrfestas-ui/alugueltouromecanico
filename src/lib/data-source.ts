/**
 * Camada de abstração — escolhe entre Sheets ou dados estáticos.
 * Páginas .astro chamam SEMPRE estes getters; nunca importam direto Sheets/static.
 */

import type { IBairro, IEvento, IModelo, IEspaco, IPagina } from './schema';
import {
  BAIRROS_STATIC, EVENTOS_STATIC, MODELOS_STATIC, ESPACOS_STATIC,
  PAGINA_TIJUCA_FESTA_JUNINA,
  PAGINAS_FESTA_JUNINA, PAGINAS_FORMATURA, PAGINAS_ANIVERSARIO_INFANTIL,
  PAGINAS_ANIVERSARIO_18, PAGINAS_FESTA_EMPRESA, PAGINAS_CASAMENTO,
} from './data-static';

const TODAS_PAGINAS = [
  PAGINA_TIJUCA_FESTA_JUNINA,
  ...PAGINAS_FESTA_JUNINA,
  ...PAGINAS_FORMATURA,
  ...PAGINAS_ANIVERSARIO_INFANTIL,
  ...PAGINAS_ANIVERSARIO_18,
  ...PAGINAS_FESTA_EMPRESA,
  ...PAGINAS_CASAMENTO,
];

const usaSheets = !!(
  import.meta.env.GOOGLE_SHEETS_ID && import.meta.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY
);

export async function getBairrosData(): Promise<IBairro[]> {
  if (usaSheets) {
    const { getBairros } = await import('./sheets');
    return getBairros();
  }
  return BAIRROS_STATIC.filter(b => b.indexable);
}

export async function getEventosData(): Promise<IEvento[]> {
  if (usaSheets) {
    const { getEventos } = await import('./sheets');
    return getEventos();
  }
  return EVENTOS_STATIC.filter(e => e.indexable);
}

export async function getModelosData(): Promise<IModelo[]> {
  if (usaSheets) {
    const { getModelos } = await import('./sheets');
    return getModelos();
  }
  return MODELOS_STATIC;
}

export async function getEspacosData(bairroSlug?: string): Promise<IEspaco[]> {
  if (usaSheets) {
    const { getEspacos } = await import('./sheets');
    return getEspacos(bairroSlug);
  }
  if (bairroSlug) return ESPACOS_STATIC.filter(e => e.bairro === bairroSlug);
  return ESPACOS_STATIC;
}

export async function getPaginasData(): Promise<IPagina[]> {
  if (usaSheets) {
    const { getPaginas } = await import('./sheets');
    return getPaginas();
  }
  return TODAS_PAGINAS.filter(p => p.indexable);
}

export async function getPaginaBySlugData(slugTotal: string): Promise<IPagina | null> {
  const all = usaSheets
    ? (await import('./sheets')).getPaginas({ todasIndexabilidades: true })
    : Promise.resolve(TODAS_PAGINAS);

  const list = await all;
  return list.find(p => p.slug_total === slugTotal) || null;
}

export async function getBairroBySlugData(slug: string): Promise<IBairro | null> {
  const all = usaSheets
    ? (await import('./sheets')).getBairros({ todasIndexabilidades: true })
    : Promise.resolve(BAIRROS_STATIC);
  const list = await all;
  return list.find(b => b.slug === slug) || null;
}

export async function getEventoBySlugData(slug: string): Promise<IEvento | null> {
  const all = usaSheets
    ? (await import('./sheets')).getEventos({ todasIndexabilidades: true })
    : Promise.resolve(EVENTOS_STATIC);
  const list = await all;
  return list.find(e => e.slug === slug) || null;
}

export async function getModeloBySlugData(slug: string): Promise<IModelo | null> {
  const all = await getModelosData();
  return all.find(m => m.slug === slug) || null;
}
