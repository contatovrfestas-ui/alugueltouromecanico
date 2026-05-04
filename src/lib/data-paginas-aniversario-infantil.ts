/**
 * 10 páginas geo de Aniversário Infantil.
 * Modelo recomendado: infantil. Demanda distribuída ao longo do ano,
 * com pico discreto em julho (férias) e dezembro/janeiro.
 */

import type { IPagina } from './schema';
import { montarPagina } from './factory-pagina';

const POL_IDADE_INFANTIL =
  'Pelo manual do fabricante e pela ABNT NBR 16.071, idade mínima de 6 anos pro modelo infantil. Peso máximo 60 kg. Pra criança de 4-5 anos (mais leve), oferecemos voltinha de 1 minuto no nível 1 com adulto presente — sem cobrar essa volta extra.';

const POL_FILA =
  'Pra festa de 30-50 crianças, 4 horas de operação cobrem 100% delas (média de 12-15 voltas/hora no nível tranquilo). Acima de 50 crianças, recomendamos 2 brinquedos em paralelo (touro + cama elástica ou touro + tobogã) pra fila não passar de 10-15 minutos por criança.';

const POL_PAI_FILMA =
  'Sim, sem problema. O operador inclusive ajuda a posicionar a criança pra você conseguir o ângulo bom. Em festa com fotógrafo profissional contratado, coordenamos a primeira volta pra captura de imagem.';

// Substitui as FAQs "Antecedência..." genéricas com info gain real:
// calendário escolar SME-RJ + climatologia INMET por mês de festa.
const FAQ_CALENDARIO_INFANTIL_2026 = {
  p: 'Quando reservar e qual mês concentra mais festa de aniversário no Rio?',
  r: 'Pelo calendário escolar da SME-RJ, as <strong>férias escolares de julho</strong> (semana 13/jul a 26/jul/2026) e as <strong>férias de fim de ano</strong> (15/dez/2026 a 5/fev/2027) concentram 60% da demanda anual de festa infantil — disponibilidade cai e preço sobe. Climatologicamente, <strong>agosto é o melhor mês</strong> (média INMET 150 mm, 9 dias de chuva — menos chuvoso do ano), e <strong>março é o pior</strong> (252 mm, 11 dias). Reserve <strong>30-45 dias</strong> antes pras férias escolares (jul, dez, jan), <strong>15-21 dias</strong> antes nos demais meses. Em festa com data de "ponte" pra feriado nacional (15/nov, 20/nov, 25/dez, 1/jan), antecipe 45 dias.',
};

export const PAGINAS_ANIVERSARIO_INFANTIL: IPagina[] = [
  // TIJUCA × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'tijuca',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico infantil para aniversário 6-12 anos na Tijuca, Vila Isabel e Grajaú. Casa de festas e salão de prédio. Laudo ABNT NBR 16.071.',
    preco_min: 800,
    preco_max: 1500,
    faqs: [
      { p: 'Quanto custa touro mecânico pra festa infantil de 30 crianças na Tijuca?', r: 'Festa infantil de 30-50 crianças com touro infantil: R$ 800-1.200 por 4h de operação, com operador incluso. Em casa de festas alugada (Toy Festas, Casa do Padre), entregamos toda documentação ABNT NBR 16.071 + ART + apólice em 24h.' },
      { p: 'Quais casas de festas infantis na Tijuca recebem touro mecânico?', r: 'Atendemos com frequência: Toy Festas (Saens Peña), Casa do Padre, Brinquelândia Tijuca, Casa de Festas Salão Lebre. Toda casa de festa do bairro já recebeu nosso material — basta indicar.' },
      { p: 'Cabe no salão de festa de prédio na Tijuca?', r: 'Prédios pós-2000 na Saens Peña/Praça Saens Peña: pé-direito 2,80–3,20m, comportam o infantil tranquilamente. Prédios anos 70-80: 2,30–2,60m, ainda comportam o infantil (precisa só 2,80m). Mande foto + medidas pelo WhatsApp.' },
      { p: 'Tempo de entrega real Méier → Tijuca em festa infantil sábado tarde?', r: 'Saída Méier sábado 12h-15h: 22-35 min até a Tijuca. Em festa com início 15h, entregamos 13h pra montar com 2h de folga.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Pai pode entrar no espaço pra filmar a volta da criança?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // BARRA DA TIJUCA × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'barra-da-tijuca',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança 6-12 anos na Barra da Tijuca, Recreio e Jacarepaguá. Casa de festas e condomínios. Laudo ABNT NBR 16.071.',
    preco_min: 900,
    preco_max: 1500,
    faqs: [
      { p: 'Quais casas de festas infantis da Barra recebem touro mecânico?', r: 'Atendemos: BarraFun, Game Station, Big Boss, Quintal da Brincadeira, Casa de Festas Outback Kids, Espaço Família. Toda casa de festa da Av. das Américas, Sernambetiba e Olegário Maciel já recebeu nosso material.' },
      { p: 'Festa infantil em condomínio fechado da Barra: como funciona o cadastro?', r: 'Condomínios da Av. das Américas, Olegário Maciel e Sernambetiba exigem cadastro prévio do veículo na portaria com 48h de antecedência. Mandamos placa + RG do operador + horário. Em condomínios da Península, cadastro pelo app específico.' },
      { p: 'Cabe no salão de festa de condomínio típico da Barra?', r: 'Salões padrão Cyrela/Even/Tegra/Carvalho Hosken: 40-80 m² com pé-direito 2,80–3,20m. Comporta o infantil sem problema. Mande foto + medidas pelo WhatsApp.' },
      { p: 'Tempo de entrega real Méier → Barra em festa infantil sábado/domingo?', r: 'Sábado/domingo manhã (8h-11h): 35-50 min. Sábado/domingo tarde (12h-16h): 50-80 min (rush retorno praia). Pra festa com início 15h-16h, entregamos 12h-13h.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Recreio, Itanhangá, Vargem Pequena com mesma faixa?', r: 'Sim. Recreio: 50-110 min do depósito (mesma faixa). Itanhangá: 50-75 min. Vargem Pequena: 60-90 min. Mesma faixa de preço, sem custo logístico extra.' },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // RECREIO × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'recreio',
    evento: 'aniversario-infantil',
    title: 'Touro Mecânico Recreio — Aniversário Infantil 2026',
    description:
      'Touro mecânico infantil para aniversário no Recreio dos Bandeirantes, Pontal e Vargem Grande. Casas térreas e condomínios. Laudo ABNT NBR 16.071.',
    preco_min: 900,
    preco_max: 1500,
    faqs: [
      { p: 'Tempo de entrega real Méier → Recreio em festa infantil de fim de semana?', r: 'Recreio começo (Posto 12): 50-65 min. Pontal (Posto 5): 80-110 min. Recomendamos saída 2-3h antes da festa.' },
      { p: 'Casas de festa infantis no Recreio que vocês atendem?', r: 'Atendemos casas de festa do entorno do Posto 12, Av. Lúcio Costa, Estrada do Pontal — espaços com área externa generosa, ideais pro touro infantil. Em casa de praia, confirmamos chão firme antes de fechar.' },
      { p: 'Festa em condomínio fechado do Recreio: como funciona o cadastro?', r: 'Condomínios da Av. Lúcio Costa, Estr. Benvindo de Novaes e Pontal exigem cadastro 48h antes. Em alguns (Bahamas, Pontal Oceânico), o veículo entra pela portaria de serviço.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Vargem Grande, Vargem Pequena, Guaratiba com mesma faixa?', r: 'Sim. Vargem Grande: 60-80 min. Guaratiba: 80-100 min. Mesma faixa de preço. Em casa de sítio, confirmamos chão firme (touro não opera em areia solta ou grama mole).' },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // JACAREPAGUÁ × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'jacarepagua',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico infantil para aniversário em Jacarepaguá, Taquara, Freguesia e Pechincha. Casa de festas, condomínios e quintais. Laudo ABNT NBR 16.071.',
    preco_min: 800,
    preco_max: 1500,
    faqs: [
      { p: 'Casas de festas infantis em Jacarepaguá que vocês atendem?', r: 'Atendemos: Espaço Família Pechincha, Casa de Festas Freguesia, Brinkar Jacarepaguá, Casa de Festas Taquara. Toda casa de festa do bairro já recebeu nosso material.' },
      { p: 'Tempo de entrega real Méier → Jacarepaguá em festa infantil?', r: 'Taquara/Pechincha (próximo Linha Amarela): 35-55 min. Freguesia: 45-70 min. Curicica/Camorim: 55-90 min. Saída 2h antes da festa.' },
      { p: 'Cabe no salão de festa de condomínio em Jacarepaguá?', r: 'Condomínios novos da Estrada dos Bandeirantes, Estrada do Pau-Ferro e Praça Seca: salões com pé-direito 2,80–3,20m, comportam o infantil. Mande foto + medidas.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Taquara, Freguesia, Pechincha, Praça Seca com mesma faixa?', r: 'Sim. Taquara: 35-55 min. Freguesia: 45-70 min. Pechincha: 40-60 min. Praça Seca: 30-50 min. Mesma faixa de preço.' },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // VILA ISABEL × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'vila-isabel',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança em Vila Isabel, Maracanã, Grajaú, Andaraí. Casa de festas e salão de prédio. Laudo ABNT NBR 16.071.',
    preco_min: 800,
    preco_max: 1400,
    faqs: [
      { p: 'Casas de festas infantis em Vila Isabel/Grajaú que vocês atendem?', r: 'Atendemos: Casa de Festas Castelo Branco, Casa de Festas Boulevard 28, Brinkar Vila Isabel, Casa de Festas Grajaú, Espaço Família Andaraí. Toda casa de festa do eixo Vila Isabel-Maracanã-Grajaú já recebeu nosso material.' },
      { p: 'Tempo de entrega real Méier → Vila Isabel/Grajaú em festa infantil?', r: 'Bairros vizinhos do depósito. Vila Isabel: 18-30 min. Grajaú: 25-45 min. Andaraí: 22-40 min. Em festa de sábado tarde, entrega 1-2h antes do início é confortável.' },
      { p: 'Cabe no salão de festa de prédio em Vila Isabel?', r: 'Vila Isabel tem prédios anos 60-90 com pé-direito 2,60-2,90m em salão. Comporta o infantil (precisa 2,80m mín). Em prédio mais antigo, mande foto + altura medida pelo WhatsApp.' },
      { p: 'Centro comercial de Vila Isabel tem restrição de carga em festa de sábado?', r: 'Sábado de manhã (até 13h) tem trânsito intenso no Boulevard 28 — entregamos antes das 11h pra evitar. Domingo: tranquilo. Em festa de sábado tarde, saímos do depósito antes das 12h.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // MÉIER × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'meier',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança no Méier, Cachambi, Engenho de Dentro, Piedade. Bairro do depósito — entrega rápida.',
    subtitle:
      'Touro mecânico infantil pra aniversário de criança 6-12 anos no Méier e bairros vizinhos da Zona Norte. Bairro do nosso depósito — entrega rápida garantida em 8-30 minutos. Laudo ABNT NBR 16.071.',
    preco_min: 700,
    preco_max: 1300,
    faqs: [
      { p: 'Por que o Méier tem entrega tão rápida em festa infantil?', r: 'Nosso depósito fica no Méier. Entrega em 8-15 min em qualquer endereço do bairro. Em festa de imprevisto (alguém cancelou e ficaram com data livre), conseguimos chegar em 30-45 min mesmo no mesmo dia, mediante disponibilidade.' },
      { p: 'Casas de festas infantis no Méier que vocês atendem?', r: 'Atendemos: Casa de Festas Méier, Brinkar Méier, Quintal Mágico Cachambi, Casa de Festas Piedade, Big Boss Engenho de Dentro. Toda casa de festa do eixo Méier-Cachambi-Piedade já recebeu nosso material.' },
      { p: 'Cabe no salão de festa de prédio típico do Méier?', r: 'Méier tem prédios anos 70-90 com pé-direito 2,60-2,90m em salão. Comporta infantil (precisa 2,80m mín). Mande foto + altura pelo WhatsApp.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Cachambi, Engenho de Dentro, Piedade, Lins com mesma faixa?', r: 'Sim. Cachambi: 5-15 min. Engenho de Dentro: 8-20 min. Piedade: 12-25 min. Lins: 10-22 min. Toda região do nosso eixo principal — mesma faixa de preço.' },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // COPACABANA × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'copacabana',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança em Copacabana e Leme. Casa de festas e salão de prédio. Laudo ABNT NBR 16.071.',
    preco_min: 900,
    preco_max: 1500,
    faqs: [
      { p: 'Casas de festas infantis em Copacabana que vocês atendem?', r: 'Atendemos: Brinkar Copacabana (Av. NS Copacabana), Casa de Festas Leme, Brinquelândia Copacabana, Quintal da Brincadeira. Em hotel com área kids (Pestana, Atlântico), exigem documentação 30 dias antes.' },
      { p: 'Onde estaciona a van de entrega em Copacabana?', r: 'Coordenamos com o porteiro pra usar vaga de carga e descarga (60-90 min são suficientes). Em endereço sem garagem, usamos zona azul. Túnel Velho rush 17h-19h: entregamos antes ou depois.' },
      { p: 'Cabe no salão de festa de prédio típico de Copacabana?', r: 'Copacabana tem mistura — prédios anos 50-60 (pé-direito 2,30-2,60m, infantil ainda passa em alguns), anos 70-90 (2,80-3,00m, comporta infantil tranquilo). Mande foto + altura pelo WhatsApp.' },
      { p: 'Tempo de entrega real Méier → Copacabana em festa infantil?', r: 'Sábado/domingo manhã: 28-45 min. Sábado/domingo tarde: 35-65 min (Túnel Velho engarrafa). Pra festa com início 15h, entregamos 12h.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // BOTAFOGO × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'botafogo',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança em Botafogo, Humaitá, Flamengo. Casa de festas e quintais. Laudo ABNT NBR 16.071.',
    preco_min: 800,
    preco_max: 1400,
    faqs: [
      { p: 'Casas de festas infantis em Botafogo/Humaitá que vocês atendem?', r: 'Atendemos: Quintal da Brincadeira (Cobal do Humaitá), Brinkar Humaitá, Casa de Festas Voluntários da Pátria, Espaço Kids Botafogo. Em casa de festa alugada, documentação ao gerente em 24h.' },
      { p: 'Cabe no salão de festa de prédio típico de Botafogo?', r: 'Prédios anos 70-80 dominam (Praia de Botafogo, Voluntários, Arnaldo Quintela): pé-direito 2,30-2,60m em salão. Infantil precisa de 2,80m mín — em prédio mais antigo, só cabe em casa térrea ou salão grande. Mande foto.' },
      { p: 'Tempo de entrega real Méier → Botafogo em festa infantil?', r: 'Sábado/domingo manhã/tarde: 25-45 min (rush túnel só durante semana). Pra festa com início 15h, entregamos 13h.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Humaitá, Flamengo, Urca com mesma faixa?', r: 'Sim. Humaitá: 22-45 min. Flamengo: 22-50 min. Urca: 30-55 min. Mesma faixa de preço.' },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // IPANEMA × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'ipanema',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança em Ipanema, Leblon, Arpoador. Casa de festas, hotel kids e quintais. Laudo ABNT NBR 16.071.',
    preco_min: 1000,
    preco_max: 1600,
    faqs: [
      { p: 'Casas de festas infantis em Ipanema/Leblon que vocês atendem?', r: 'Atendemos: Casa de Festas Garcia D\'Avila, Brinkar Leblon, Quintal Mágico Ipanema, Espaço Kids Cobal Leblon. Em hotel com área kids (Caesar Park, Sol Ipanema, Fasano), exigem documentação 30 dias antes.' },
      { p: 'Cabe em cobertura ou salão de festa de prédio em Ipanema?', r: 'Cobertura com pé-direito 3m+ comporta infantil tranquilo. Salão de festa térreo de prédio anos 70-80 (Visc. de Pirajá, Henrique Dumont): pé-direito 2,60-2,90m, ainda comporta infantil. Mande foto + medidas.' },
      { p: 'Onde estaciona a van em Vieira Souto/Delfim Moreira?', r: 'Coordenamos com porteiro pra usar vaga de carga e descarga. Vieira Souto bloqueada aos domingos pela manhã (até 13h, Lazer aberto): entregamos antes das 7h ou depois das 13h.' },
      { p: 'Tempo de entrega real Méier → Ipanema em festa infantil?', r: 'Sábado/domingo manhã: 30-50 min. Tarde: 35-70 min (rush retorno praia). Pra festa com início 15h, saímos 12h-13h.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Leblon, Arpoador com mesma faixa?', r: 'Sim. Leblon: 35-75 min. Arpoador: 28-65 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),

  // MADUREIRA × ANIVERSÁRIO INFANTIL
  montarPagina({
    bairro: 'madureira',
    evento: 'aniversario-infantil',
    description:
      'Touro mecânico inflável infantil para aniversário de criança em Madureira, Cascadura, Oswaldo Cruz, Campinho. Casa de festas e salão de prédio. Laudo ABNT NBR 16.071.',
    preco_min: 700,
    preco_max: 1300,
    faqs: [
      { p: 'Casas de festas infantis em Madureira que vocês atendem?', r: 'Atendemos: Casa de Festas Madureira, Brinkar Cascadura, Casa de Festas Oswaldo Cruz, Espaço Kids Campinho, Casa de Festas Vaz Lobo. Toda casa de festa da região já recebeu nosso material.' },
      { p: 'Tempo de entrega real Méier → Madureira em festa infantil?', r: 'Sábado manhã (8h-11h): 25-35 min. Sábado tarde (12h-18h): 45-60 min — Mercadão fecha vias. Domingo: 25-40 min. Pra festa de sábado tarde, recomendamos entrega antes das 11h.' },
      { p: 'Cabe no salão de festa de prédio em Madureira?', r: 'Madureira tem prédios anos 60-80 com pé-direito 2,40-2,80m em salão. Comporta infantil (precisa 2,80m mín) em prédio mais novo. Em prédio antigo, mande foto + altura pelo WhatsApp.' },
      { p: 'Idade mínima e peso máximo pro touro infantil?', r: POL_IDADE_INFANTIL },
      { p: 'Quantas crianças cabem em 4 horas de operação?', r: POL_FILA },
      { p: 'Atendem Cascadura, Oswaldo Cruz, Campinho com mesma faixa?', r: 'Sim. Cascadura: 18-40 min. Oswaldo Cruz: 22-45 min. Campinho: 25-50 min. Mesma faixa de preço.' },
      { p: 'Pai pode entrar no espaço pra filmar?', r: POL_PAI_FILMA },
      FAQ_CALENDARIO_INFANTIL_2026,
    ],
  }),
];
