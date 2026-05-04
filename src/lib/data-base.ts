/**
 * Dados base (bairros, eventos, modelos, espaços) que a factory usa.
 * Separado de data-static.ts pra evitar circular import com os arquivos
 * de páginas (que importam factory que importava data-static).
 */

import type { IBairro, IEvento, IModelo, IEspaco } from './schema';

// =====================================================================
// MODELOS — fixo, só 3
// =====================================================================
export const MODELOS_STATIC: IModelo[] = [
  {
    slug: 'infantil',
    nome: 'Infantil',
    area_inflada: '3m × 3m',
    area_inflada_largura: 3,
    area_inflada_profundidade: 3,
    pe_direito_min: 2.8,
    footprint_total: '4,5m × 4,5m',
    peso_max_kg: 60,
    idade_min: 6,
    niveis_intensidade: 3,
    descricao_curta: 'Festa de criança 6-12 anos',
    descricao_longa:
      'Touro mecânico inflável infantil com movimento manual controlado pelo operador. Ideal para festa de aniversário de criança a partir de 6 anos. Cabe em salão de festa de prédio com pé-direito a partir de 2,80m.',
    foto_url: '/images/modelos/touro-infantil.webp',
  },
  {
    slug: 'profissional',
    nome: 'Profissional',
    area_inflada: '5m × 5m',
    area_inflada_largura: 5,
    area_inflada_profundidade: 5,
    pe_direito_min: 3.0,
    footprint_total: '7m × 7m',
    peso_max_kg: 120,
    idade_min: 14,
    niveis_intensidade: 5,
    descricao_curta: 'Festa adulto, formatura, junina',
    descricao_longa:
      'Touro mecânico profissional motorizado, com 5 níveis de intensidade controlados via joystick. Ideal para festa adulto (formatura, festa junina, aniversário 18+). Inclui base inflável de queda. Necessita pé-direito mínimo de 3m.',
    foto_url: '/images/modelos/touro-profissional.webp',
  },
  {
    slug: 'gigante',
    nome: 'Gigante',
    area_inflada: '6m × 6m',
    area_inflada_largura: 6,
    area_inflada_profundidade: 6,
    pe_direito_min: 3.2,
    footprint_total: '8m × 8m',
    peso_max_kg: 150,
    idade_min: 14,
    niveis_intensidade: 5,
    descricao_curta: 'Festa empresa, arraiá grande',
    descricao_longa:
      'Touro mecânico gigante com modo "campeonato" e maior capacidade de peso. Ideal para evento corporativo de 200+ pessoas, arraiá público grande, festival. Necessita pé-direito mínimo de 3,20m e área de 8x8m.',
    foto_url: '/images/modelos/touro-gigante.webp',
  },
];

// =====================================================================
// EVENTOS
// =====================================================================
export const EVENTOS_STATIC: IEvento[] = [
  { slug: 'festa-junina', nome: 'Festa Junina', meses_pico: [6, 7], publico_tipico: 'misto adulto/criança',
    modelo_recomendado: 'profissional', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: true },
  { slug: 'aniversario-infantil', nome: 'Aniversário Infantil', meses_pico: [], publico_tipico: 'criança 6-12 anos',
    modelo_recomendado: 'infantil', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: true },
  { slug: 'aniversario-18', nome: 'Aniversário 18 anos', meses_pico: [], publico_tipico: 'adulto 17-25',
    modelo_recomendado: 'profissional', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: true },
  { slug: 'formatura', nome: 'Formatura', meses_pico: [3, 7, 12], publico_tipico: 'adulto 21-28',
    modelo_recomendado: 'profissional', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: true },
  { slug: 'festa-empresa', nome: 'Festa de Empresa', meses_pico: [11, 12], publico_tipico: 'adulto corporativo',
    modelo_recomendado: 'profissional', duracao_recomendada_horas: 6, view: 'CMSAstro', indexable: true },
  { slug: 'casamento', nome: 'Casamento', meses_pico: [], publico_tipico: 'adulto misto',
    modelo_recomendado: 'profissional', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: true },
  { slug: 'cha-de-bebe', nome: 'Chá de Bebê', meses_pico: [], publico_tipico: 'adulto + criança',
    modelo_recomendado: 'infantil', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: false },
  { slug: 'despedida-solteiro', nome: 'Despedida de Solteiro', meses_pico: [], publico_tipico: 'adulto',
    modelo_recomendado: 'profissional', duracao_recomendada_horas: 4, view: 'CMSAstro', indexable: false },
  { slug: 'festival', nome: 'Festival', meses_pico: [], publico_tipico: 'público geral',
    modelo_recomendado: 'gigante', duracao_recomendada_horas: 8, view: 'CMSAstro', indexable: false },
];

// =====================================================================
// BAIRROS — Cidade do Rio (10 prioritários no MVP)
// =====================================================================
export const BAIRROS_STATIC: IBairro[] = [
  { slug: 'tijuca', nome: 'Tijuca', zona: 'norte', populacao: 163805, densidade: 16700,
    lat: -22.9249, lng: -43.2353, cep_central: '20510-070',
    tempo_entrega_min: 22, tempo_entrega_max: 55,
    restricao_logistica: 'Tijuca Velha (Praça Xavier de Brito, Garibaldi) tem ruas estreitas — pedimos foto da entrada do prédio.',
    bairros_proximos: ['vila-isabel', 'maracana', 'andarai'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'barra-da-tijuca', nome: 'Barra da Tijuca', zona: 'oeste', populacao: 174353, densidade: 4500,
    lat: -23.0001, lng: -43.3654, cep_central: '22631-002',
    tempo_entrega_min: 35, tempo_entrega_max: 80,
    restricao_logistica: 'Condomínios fechados exigem cadastro prévio do veículo. Trecho Av. das Américas tem rush forte 17h-20h.',
    bairros_proximos: ['recreio', 'jacarepagua', 'itanhanga'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'copacabana', nome: 'Copacabana', zona: 'sul', populacao: 146392, densidade: 35900,
    lat: -22.9711, lng: -43.1822, cep_central: '22070-002',
    tempo_entrega_min: 28, tempo_entrega_max: 65,
    restricao_logistica: 'Estacionamento de van complicado em horário comercial. Túnel Velho costuma ter trânsito 17h-19h.',
    bairros_proximos: ['ipanema', 'leme', 'botafogo'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'botafogo', nome: 'Botafogo', zona: 'sul', populacao: 82890, densidade: 18500,
    lat: -22.9489, lng: -43.1842, cep_central: '22250-040',
    tempo_entrega_min: 25, tempo_entrega_max: 55,
    restricao_logistica: 'Bairro com prédios anos 70-80 com pé-direito 2,30-2,60m — só comporta o infantil. Praia de Botafogo: rush 17h-19h.',
    bairros_proximos: ['flamengo', 'urca', 'humaita'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'recreio', nome: 'Recreio dos Bandeirantes', zona: 'oeste', populacao: 92013, densidade: 3000,
    lat: -23.0263, lng: -43.4636, cep_central: '22790-103',
    tempo_entrega_min: 50, tempo_entrega_max: 110,
    restricao_logistica: 'Condomínios fechados predominantes. Acesso pela Av. das Américas. Saída do túnel da Grota Funda pode complicar nos fins de semana.',
    bairros_proximos: ['barra-da-tijuca', 'guaratiba', 'vargem-grande'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'jacarepagua', nome: 'Jacarepaguá', zona: 'oeste', populacao: 158220, densidade: 4500,
    lat: -22.9577, lng: -43.3719, cep_central: '22751-070',
    tempo_entrega_min: 40, tempo_entrega_max: 90,
    restricao_logistica: 'Bairro extenso. Recomendamos saída antecipada nos fins de semana de festa. Acesso por Linha Amarela ou Estrada dos Bandeirantes.',
    bairros_proximos: ['barra-da-tijuca', 'taquara', 'curicica'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'vila-isabel', nome: 'Vila Isabel', zona: 'norte', populacao: 86109, densidade: 13800,
    lat: -22.9221, lng: -43.2525, cep_central: '20560-020',
    tempo_entrega_min: 18, tempo_entrega_max: 50,
    restricao_logistica: 'Centro comercial restrito a 6 toneladas em horário comercial. Entregamos antes das 8h ou depois das 19h.',
    bairros_proximos: ['tijuca', 'maracana', 'grajau'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'ipanema', nome: 'Ipanema', zona: 'sul', populacao: 41928, densidade: 19400,
    lat: -22.9844, lng: -43.2046, cep_central: '22420-040',
    tempo_entrega_min: 30, tempo_entrega_max: 70,
    restricao_logistica: 'Estacionamento limitado. Festa em casa de praia: marcar entrega manhã. Avenida Vieira Souto bloqueada aos domingos pela manhã.',
    bairros_proximos: ['leblon', 'copacabana', 'arpoador'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'meier', nome: 'Méier', zona: 'norte', populacao: 49828, densidade: 16800,
    lat: -22.9028, lng: -43.2780, cep_central: '20720-002',
    tempo_entrega_min: 8, tempo_entrega_max: 30,
    restricao_logistica: 'Bairro do depósito — entrega rápida garantida. Cadastro Marabraz e Linha Vermelha facilitam acesso.',
    bairros_proximos: ['cachambi', 'engenho-de-dentro', 'piedade'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },

  { slug: 'madureira', nome: 'Madureira', zona: 'norte', populacao: 50031, densidade: 18000,
    lat: -22.8728, lng: -43.3361, cep_central: '21351-070',
    tempo_entrega_min: 25, tempo_entrega_max: 60,
    restricao_logistica: 'Centro comercial intenso aos sábados — entregar antes de 11h. Mercado de Madureira fecha algumas vias.',
    bairros_proximos: ['cascadura', 'oswaldo-cruz', 'campinho'],
    view: 'CMSAstro', indexable: true, prioridade: 1 },
];

// =====================================================================
// ESPAÇOS — placeholder, real virá do Google Places
// =====================================================================
export const ESPACOS_STATIC: IEspaco[] = [];
