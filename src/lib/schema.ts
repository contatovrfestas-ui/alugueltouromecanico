/**
 * Schemas TypeScript pra ERP em Google Sheets.
 * Cada interface representa uma aba do Sheet, e tem `view` + `indexable`
 * pro filtro editorial estilo santifer.
 */

export type ModeloTouro = 'infantil' | 'profissional' | 'gigante';
export type EventoSlug =
  | 'festa-junina'
  | 'aniversario-infantil'
  | 'aniversario-18'
  | 'formatura'
  | 'casamento'
  | 'festa-empresa'
  | 'cha-de-bebe'
  | 'despedida-solteiro'
  | 'festival';

export type ZonaRio = 'sul' | 'norte' | 'oeste' | 'centro';

// =====================================================================
// BAIRRO
// =====================================================================
export interface IBairro {
  slug: string;                     // ex: "tijuca"
  nome: string;                     // ex: "Tijuca"
  zona: ZonaRio;
  populacao: number;                // IBGE Censo 2022
  densidade: number | null;         // hab/km²
  lat: number;
  lng: number;
  cep_central: string;
  tempo_entrega_min: number;        // minutos médios do depósito
  tempo_entrega_max: number;
  restricao_logistica: string;      // texto livre
  bairros_proximos: string[];       // slugs
  view: string;                     // 'CMSAstro' = entra no build
  indexable: boolean;
  prioridade: 1 | 2 | 3;            // 1=lançamento, 2=fase 2, 3=futuro
}

export const IBairroFields = [
  'slug', 'nome', 'zona', 'populacao', 'densidade', 'lat', 'lng',
  'cep_central', 'tempo_entrega_min', 'tempo_entrega_max',
  'restricao_logistica', 'bairros_proximos', 'view', 'indexable', 'prioridade',
];

export function mapBairroFields(row: Record<string, any>): IBairro {
  return {
    slug: String(row.slug || ''),
    nome: String(row.nome || ''),
    zona: (row.zona || 'sul') as ZonaRio,
    populacao: Number(row.populacao || 0),
    densidade: row.densidade ? Number(row.densidade) : null,
    lat: Number(row.lat || 0),
    lng: Number(row.lng || 0),
    cep_central: String(row.cep_central || ''),
    tempo_entrega_min: Number(row.tempo_entrega_min || 0),
    tempo_entrega_max: Number(row.tempo_entrega_max || 0),
    restricao_logistica: String(row.restricao_logistica || ''),
    bairros_proximos: String(row.bairros_proximos || '').split(',').map(s => s.trim()).filter(Boolean),
    view: String(row.view || ''),
    indexable: row.indexable === true || row.indexable === 'TRUE' || row.indexable === 'true',
    prioridade: (Number(row.prioridade) || 3) as 1 | 2 | 3,
  };
}

// =====================================================================
// EVENTO
// =====================================================================
export interface IEvento {
  slug: EventoSlug;
  nome: string;                     // ex: "Festa Junina"
  meses_pico: number[];             // [6, 7] = junho/julho
  publico_tipico: string;           // "adulto misto 18-40"
  modelo_recomendado: ModeloTouro;
  duracao_recomendada_horas: number;
  view: string;
  indexable: boolean;
}

export const IEventoFields = [
  'slug', 'nome', 'meses_pico', 'publico_tipico',
  'modelo_recomendado', 'duracao_recomendada_horas', 'view', 'indexable',
];

export function mapEventoFields(row: Record<string, any>): IEvento {
  return {
    slug: row.slug as EventoSlug,
    nome: String(row.nome || ''),
    meses_pico: String(row.meses_pico || '').split(',').map(n => Number(n.trim())).filter(Boolean),
    publico_tipico: String(row.publico_tipico || ''),
    modelo_recomendado: (row.modelo_recomendado || 'profissional') as ModeloTouro,
    duracao_recomendada_horas: Number(row.duracao_recomendada_horas || 4),
    view: String(row.view || ''),
    indexable: row.indexable === true || row.indexable === 'TRUE' || row.indexable === 'true',
  };
}

// =====================================================================
// MODELO DE TOURO
// =====================================================================
export interface IModelo {
  slug: ModeloTouro;
  nome: string;
  area_inflada: string;             // "5m × 5m"
  area_inflada_largura: number;     // 5
  area_inflada_profundidade: number;
  pe_direito_min: number;           // 3.0
  footprint_total: string;          // "7m × 7m"
  peso_max_kg: number;
  idade_min: number;
  niveis_intensidade: number;
  descricao_curta: string;
  descricao_longa: string;
  foto_url: string;
}

export const IModeloFields = [
  'slug', 'nome', 'area_inflada', 'area_inflada_largura',
  'area_inflada_profundidade', 'pe_direito_min', 'footprint_total',
  'peso_max_kg', 'idade_min', 'niveis_intensidade',
  'descricao_curta', 'descricao_longa', 'foto_url',
];

export function mapModeloFields(row: Record<string, any>): IModelo {
  return {
    slug: row.slug as ModeloTouro,
    nome: String(row.nome || ''),
    area_inflada: String(row.area_inflada || ''),
    area_inflada_largura: Number(row.area_inflada_largura || 0),
    area_inflada_profundidade: Number(row.area_inflada_profundidade || 0),
    pe_direito_min: Number(row.pe_direito_min || 0),
    footprint_total: String(row.footprint_total || ''),
    peso_max_kg: Number(row.peso_max_kg || 0),
    idade_min: Number(row.idade_min || 6),
    niveis_intensidade: Number(row.niveis_intensidade || 5),
    descricao_curta: String(row.descricao_curta || ''),
    descricao_longa: String(row.descricao_longa || ''),
    foto_url: String(row.foto_url || ''),
  };
}

// =====================================================================
// ESPAÇO (salão de festa coletado via Google Places)
// =====================================================================
export interface IEspaco {
  bairro: string;                   // slug
  nome: string;
  endereco: string;
  pe_direito_estimado: number;
  area_aproximada_m2: number | null;
  comporta_infantil: boolean;
  comporta_profissional: boolean;
  comporta_gigante: boolean;
  place_id: string;
  observacoes: string;
}

export const IEspacoFields = [
  'bairro', 'nome', 'endereco', 'pe_direito_estimado', 'area_aproximada_m2',
  'comporta_infantil', 'comporta_profissional', 'comporta_gigante',
  'place_id', 'observacoes',
];

export function mapEspacoFields(row: Record<string, any>): IEspaco {
  const toBool = (v: any) => v === true || v === 'TRUE' || v === 'true';
  return {
    bairro: String(row.bairro || ''),
    nome: String(row.nome || ''),
    endereco: String(row.endereco || ''),
    pe_direito_estimado: Number(row.pe_direito_estimado || 0),
    area_aproximada_m2: row.area_aproximada_m2 ? Number(row.area_aproximada_m2) : null,
    comporta_infantil: toBool(row.comporta_infantil),
    comporta_profissional: toBool(row.comporta_profissional),
    comporta_gigante: toBool(row.comporta_gigante),
    place_id: String(row.place_id || ''),
    observacoes: String(row.observacoes || ''),
  };
}

// =====================================================================
// PÁGINA — entidade central de pSEO
// Cada linha = uma URL / página HTML gerada
// =====================================================================
export interface IPagina {
  slug_total: string;               // "tijuca/festa-junina"
  bairro: string;                   // slug do bairro
  evento: EventoSlug;

  // SEO
  title: string;
  description: string;
  h1: string;
  subtitle: string;

  // Casos reais (3 slots — vazios se cenário sem operação ainda)
  caso1_data: string;
  caso1_local: string;
  caso1_descricao: string;
  caso2_data: string;
  caso2_local: string;
  caso2_descricao: string;
  caso3_data: string;
  caso3_local: string;
  caso3_descricao: string;

  // Comercial
  preco_min: number;
  preco_max: number;
  modelo_recomendado: ModeloTouro;

  // FAQs geo-específicas (8 slots)
  faq1_pergunta: string; faq1_resposta: string;
  faq2_pergunta: string; faq2_resposta: string;
  faq3_pergunta: string; faq3_resposta: string;
  faq4_pergunta: string; faq4_resposta: string;
  faq5_pergunta: string; faq5_resposta: string;
  faq6_pergunta: string; faq6_resposta: string;
  faq7_pergunta: string; faq7_resposta: string;
  faq8_pergunta: string; faq8_resposta: string;

  // Imagem hero
  imagem_hero: string;
  imagem_hero_alt: string;

  // Operacional
  prioridade_lancamento: 1 | 2 | 3;
  view: string;
  indexable: boolean;
  data_atualizacao: string;         // ISO date
  proxima_revisao: string;          // ISO date
}

export const IPaginaFields = [
  'slug_total', 'bairro', 'evento',
  'title', 'description', 'h1', 'subtitle',
  'caso1_data', 'caso1_local', 'caso1_descricao',
  'caso2_data', 'caso2_local', 'caso2_descricao',
  'caso3_data', 'caso3_local', 'caso3_descricao',
  'preco_min', 'preco_max', 'modelo_recomendado',
  'faq1_pergunta', 'faq1_resposta',
  'faq2_pergunta', 'faq2_resposta',
  'faq3_pergunta', 'faq3_resposta',
  'faq4_pergunta', 'faq4_resposta',
  'faq5_pergunta', 'faq5_resposta',
  'faq6_pergunta', 'faq6_resposta',
  'faq7_pergunta', 'faq7_resposta',
  'faq8_pergunta', 'faq8_resposta',
  'imagem_hero', 'imagem_hero_alt',
  'prioridade_lancamento', 'view', 'indexable',
  'data_atualizacao', 'proxima_revisao',
];

export function mapPaginaFields(row: Record<string, any>): IPagina {
  const s = (k: string) => String(row[k] || '');
  return {
    slug_total: s('slug_total'),
    bairro: s('bairro'),
    evento: row.evento as EventoSlug,
    title: s('title'),
    description: s('description'),
    h1: s('h1'),
    subtitle: s('subtitle'),
    caso1_data: s('caso1_data'),
    caso1_local: s('caso1_local'),
    caso1_descricao: s('caso1_descricao'),
    caso2_data: s('caso2_data'),
    caso2_local: s('caso2_local'),
    caso2_descricao: s('caso2_descricao'),
    caso3_data: s('caso3_data'),
    caso3_local: s('caso3_local'),
    caso3_descricao: s('caso3_descricao'),
    preco_min: Number(row.preco_min || 0),
    preco_max: Number(row.preco_max || 0),
    modelo_recomendado: (row.modelo_recomendado || 'profissional') as ModeloTouro,
    faq1_pergunta: s('faq1_pergunta'), faq1_resposta: s('faq1_resposta'),
    faq2_pergunta: s('faq2_pergunta'), faq2_resposta: s('faq2_resposta'),
    faq3_pergunta: s('faq3_pergunta'), faq3_resposta: s('faq3_resposta'),
    faq4_pergunta: s('faq4_pergunta'), faq4_resposta: s('faq4_resposta'),
    faq5_pergunta: s('faq5_pergunta'), faq5_resposta: s('faq5_resposta'),
    faq6_pergunta: s('faq6_pergunta'), faq6_resposta: s('faq6_resposta'),
    faq7_pergunta: s('faq7_pergunta'), faq7_resposta: s('faq7_resposta'),
    faq8_pergunta: s('faq8_pergunta'), faq8_resposta: s('faq8_resposta'),
    imagem_hero: s('imagem_hero'),
    imagem_hero_alt: s('imagem_hero_alt'),
    prioridade_lancamento: (Number(row.prioridade_lancamento) || 3) as 1 | 2 | 3,
    view: s('view'),
    indexable: row.indexable === true || row.indexable === 'TRUE' || row.indexable === 'true',
    data_atualizacao: s('data_atualizacao'),
    proxima_revisao: s('proxima_revisao'),
  };
}

// =====================================================================
// FAQ helpers — extrai os 8 pares pra um array
// =====================================================================
export interface IFaqItem { pergunta: string; resposta: string; }

export function extrairFaqs(p: IPagina): IFaqItem[] {
  const slots: IFaqItem[] = [];
  for (let i = 1; i <= 8; i++) {
    const pergunta = (p as any)[`faq${i}_pergunta`];
    const resposta = (p as any)[`faq${i}_resposta`];
    if (pergunta && resposta) slots.push({ pergunta, resposta });
  }
  return slots;
}

// =====================================================================
// Casos reais helpers
// =====================================================================
export interface ICasoReal { data: string; local: string; descricao: string; }

export function extrairCasos(p: IPagina): ICasoReal[] {
  const slots: ICasoReal[] = [];
  for (let i = 1; i <= 3; i++) {
    const data = (p as any)[`caso${i}_data`];
    const local = (p as any)[`caso${i}_local`];
    const descricao = (p as any)[`caso${i}_descricao`];
    if (data && local && descricao) slots.push({ data, local, descricao });
  }
  return slots;
}
