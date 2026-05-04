/**
 * Factory pra criar IPagina com defaults sensatos.
 * Cada chamada só precisa especificar bairro/evento + 8 FAQs específicos
 * + (opcional) casos reais e overrides de title/description.
 */

import type { IPagina, EventoSlug, ModeloTouro } from './schema';
import { BAIRROS_STATIC, EVENTOS_STATIC } from './data-base';

interface FactoryInput {
  bairro: string;                        // slug
  evento: EventoSlug;
  title?: string;
  description?: string;
  h1?: string;
  subtitle?: string;
  preco_min?: number;
  preco_max?: number;
  modelo?: ModeloTouro;
  faqs: Array<{ p: string; r: string }>; // 8 itens
  casos?: Array<{ data: string; local: string; descricao: string }>;
  data_atualizacao?: string;
  proxima_revisao?: string;
  indexable?: boolean;
}

const HOJE_DEFAULT = '2026-05-03';
const PROXIMA_REVISAO_DEFAULT = '2026-08-03';

export function montarPagina(i: FactoryInput): IPagina {
  const b = BAIRROS_STATIC.find(x => x.slug === i.bairro);
  const e = EVENTOS_STATIC.find(x => x.slug === i.evento);
  if (!b) throw new Error(`Bairro não encontrado: ${i.bairro}`);
  if (!e) throw new Error(`Evento não encontrado: ${i.evento}`);

  const modelo = i.modelo || e.modelo_recomendado;
  const faqs = i.faqs.slice(0, 8);
  while (faqs.length < 8) faqs.push({ p: '', r: '' });

  const casos = i.casos || [];
  const c = (idx: number) => casos[idx] || { data: '', local: '', descricao: '' };

  const titleDefault = `Touro Mecânico ${b.nome} — ${e.nome} 2026`;
  const descDefault = `Touro mecânico ${modelo} para ${e.nome.toLowerCase()} em ${b.nome}, Rio de Janeiro. Laudo INMETRO, seguro de RC, operador profissional incluso.`;
  const h1Default = `Aluguel de Touro Mecânico em ${b.nome} — ${e.nome}`;
  const subtitleDefault = `Touro mecânico ${modelo} para ${e.nome.toLowerCase()} em ${b.nome} e bairros próximos. Saída do depósito em Méier, entrega em ${b.tempo_entrega_min}–${b.tempo_entrega_max} minutos. Laudo INMETRO NBR 16.071, seguro de RC R$ 300.000, operador profissional.`;

  return {
    slug_total: `${i.bairro}/${i.evento}`,
    bairro: i.bairro,
    evento: i.evento,

    title: i.title || titleDefault,
    description: i.description || descDefault,
    h1: i.h1 || h1Default,
    subtitle: i.subtitle || subtitleDefault,

    caso1_data: c(0).data, caso1_local: c(0).local, caso1_descricao: c(0).descricao,
    caso2_data: c(1).data, caso2_local: c(1).local, caso2_descricao: c(1).descricao,
    caso3_data: c(2).data, caso3_local: c(2).local, caso3_descricao: c(2).descricao,

    preco_min: i.preco_min ?? 1200,
    preco_max: i.preco_max ?? 3500,
    modelo_recomendado: modelo,

    faq1_pergunta: faqs[0].p, faq1_resposta: faqs[0].r,
    faq2_pergunta: faqs[1].p, faq2_resposta: faqs[1].r,
    faq3_pergunta: faqs[2].p, faq3_resposta: faqs[2].r,
    faq4_pergunta: faqs[3].p, faq4_resposta: faqs[3].r,
    faq5_pergunta: faqs[4].p, faq5_resposta: faqs[4].r,
    faq6_pergunta: faqs[5].p, faq6_resposta: faqs[5].r,
    faq7_pergunta: faqs[6].p, faq7_resposta: faqs[6].r,
    faq8_pergunta: faqs[7].p, faq8_resposta: faqs[7].r,

    imagem_hero: `/images/bairros/${i.bairro}-${i.evento}.webp`,
    imagem_hero_alt: `Touro mecânico em ${b.nome} para ${e.nome}`,

    prioridade_lancamento: 1,
    view: 'CMSAstro',
    indexable: i.indexable ?? true,
    data_atualizacao: i.data_atualizacao || HOJE_DEFAULT,
    proxima_revisao: i.proxima_revisao || PROXIMA_REVISAO_DEFAULT,
  };
}
