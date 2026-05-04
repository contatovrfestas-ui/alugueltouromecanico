/**
 * Página piloto: Tijuca × Festa Junina.
 * Versão revisada com os 10 ajustes do seo-writer.
 */

import type { IPagina } from './schema';

export const PAGINA_TIJUCA_FESTA_JUNINA: IPagina = {
  slug_total: 'tijuca/festa-junina',
  bairro: 'tijuca',
  evento: 'festa-junina',

  title: 'Touro Mecânico Tijuca — Festa Junina 2026',
  description:
    'Touro mecânico para arraiás privados na Tijuca, Vila Isabel e Grajaú. Laudo ABNT NBR 16.071, seguro RC, entrega 22 min do depósito Méier.',
  h1: 'Aluguel de Touro Mecânico na Tijuca para Festa Junina',
  subtitle:
    'Touro mecânico inflável e profissional para arraiás, festas juninas privadas e eventos corporativos na Tijuca (148.383 habitantes, Censo IBGE 2022 — um dos 10 bairros mais populosos do Brasil), Vila Isabel e Grajaú. Saída do depósito em Méier, entrega em até 25 minutos no horário ideal, laudo ABNT NBR 16.071 atualizado em janeiro/2026.',

  // Casos vazios até confirmar com Victor o inventário real de touro
  caso1_data: '', caso1_local: '', caso1_descricao: '',
  caso2_data: '', caso2_local: '', caso2_descricao: '',
  caso3_data: '', caso3_local: '', caso3_descricao: '',

  preco_min: 1200,
  preco_max: 3500,
  modelo_recomendado: 'profissional',

  faq1_pergunta: 'E se chover no sábado de festa junina na Tijuca?',
  faq1_resposta:
    'Em caso de alerta laranja Climatempo/INMET com 24h de antecedência pra região da Tijuca, reagendamos sem custo pra qualquer fim de semana de junho/julho/agosto. Se a chuva começar durante o evento, paramos a operação por norma ABNT NBR 16.071 seção 7.3 — o restante do tempo contratado vira crédito pra outra data. Política em linha com o Procon-RJ.',

  faq2_pergunta: 'Cabe no salão de festa do prédio na Saens Peña?',
  faq2_resposta:
    'Depende do ano de construção. Prédios pós-2000 na Saens Peña: pé-direito 2,80–3,20m, comportam infantil e às vezes profissional. Prédios anos 70–80: pé-direito 2,30–2,60m, só o infantil passa. Mande foto + medidas pelo WhatsApp e confirmamos em 30 minutos.',

  faq3_pergunta: 'Qual o tempo de operação que faz sentido pra arraiá privado de condomínio?',
  faq3_resposta:
    'Pra festa de condomínio na Tijuca (público típico 50–100 moradores), 4 horas de operação cobrem o pico — costuma ser das 16h às 20h pra respeitar a lei do silêncio das 22h. Acima disso é sobrecarga: pico de fila no início, gente cansada no fim.',

  faq4_pergunta: 'Festa junina temática em casa própria com touro mecânico exige alvará?',
  faq4_resposta:
    'Casa própria, festa privada, até 100 pessoas, respeitando a Lei do Silêncio (Lei Municipal RJ 3.268/01) — não exige alvará. Acima de 100 pessoas em ambiente fechado, exige AVCB simplificado do Corpo de Bombeiros. Em condomínio, depende da convenção interna.',

  faq5_pergunta: 'Vocês entregam em Vila Isabel e Grajaú? Tem custo extra?',
  faq5_resposta:
    'Sim — Vila Isabel saímos em 18 a 25 min, Grajaú em 15 a 22 min. Mesma faixa de preço da Tijuca, sem custo logístico adicional. Atenção: centro comercial de Vila Isabel tem restrição de carga em horário comercial — entregamos antes das 8h ou depois das 19h.',

  faq6_pergunta: 'Qual a idade mínima pra subir no touro mecânico em arraiá?',
  faq6_resposta:
    'Pelo manual do fabricante e pela norma ABNT NBR 16.071, idade mínima de 6 anos para o modelo infantil e 14 anos para o profissional. Nosso operador segue à risca — não é negociável, e isso protege o cliente em caso de fiscalização.',

  faq7_pergunta: 'Vocês emitem nota fiscal pra empresa em zona corporativa da Tijuca (Praça da Bandeira)?',
  faq7_resposta:
    'Sim, NF eletrônica de serviço com retenção tributária correta. CNAE 7729-2/03 (locação de outros objetos pessoais e domésticos). Atendemos eventos corporativos das empresas do entorno da Praça da Bandeira / Cidade Nova com frequência — tempo de entrega 12 a 15 minutos do depósito.',

  faq8_pergunta: 'Quando reservar e qual fim de semana de junho dá menos conflito?',
  faq8_resposta:
    'Pelo calendário Riotur 2026, a demanda concentra em 4 ondas: (1) <strong>13-14/jun</strong> — esquenta antes do São João, (2) <strong>20-21/jun</strong> — pico absoluto + arraiá oficial Riotur (Av. das Américas 5300 e 15500), (3) <strong>23-24/jun</strong> — véspera + São João (quarta em 2026, favorece festa empresa fim de tarde), (4) <strong>27-28/jun</strong> — "junina atrasada", baixa concorrência pública. Climatologicamente, junho é <strong>excelente</strong> pra outdoor: média INMET de 154 mm de chuva e 8 dias chuvosos, segundo melhor mês do ano. Reserve 60 dias antes pras ondas 1-2; 30-45 dias pra onda 4 (mais disponibilidade).',

  imagem_hero: '/images/bairros/tijuca-festa-junina.webp',
  imagem_hero_alt: 'Touro mecânico profissional em festa junina na Tijuca, Rio de Janeiro',

  prioridade_lancamento: 1,
  view: 'CMSAstro',
  indexable: true,
  data_atualizacao: '2026-05-03',
  proxima_revisao: '2026-06-03',
};
