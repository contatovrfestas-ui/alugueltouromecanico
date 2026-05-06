/**
 * 10 páginas geo de Festa de Empresa / Confraternização Corporativa.
 * Modelo recomendado: profissional (gigante pra 300+ pessoas).
 * Pico: novembro-dezembro (confraternização) e junho (festa junina corporativa).
 */

import type { IPagina } from './schema';
import { montarPagina } from './factory-pagina';

const POL_NF_CNPJ =
  'Sim, NF eletrônica de serviço pra CNPJ com retenção tributária correta. CNAE 7729-2/03 (locação de outros objetos pessoais e domésticos). Atendemos empresas de todos os portes — MEI, LTDA, SA. RPA disponível pra contratação pessoa física via comissão de funcionários.';

const POL_BEBIDA_CORP =
  'O operador é treinado pra identificar visivelmente alcoolizado e barrar com cordialidade. Em festa de empresa, isso é regra: o seguro de RC tem cláusula de exclusão pra usuário visivelmente embriagado, e a NBR 16.071 prevê barragem. Comunicamos o RH / responsável pelo evento antes. Empresa não arca com acidente por negligência — estar coberto pelo seguro exige que o operador cumpra essa triagem.';

const POL_SEGURO_CORP =
  'Apólice de RC R$ 300.000 inclusa. Para eventos corporativos, o responsável pelo evento (RH, empresa de eventos contratada) normalmente exige apólice com cláusula de responsabilidade civil do contratante (RC-Evento) — entregamos o documento em 24h. Alguns venues exigem R$ 500.000: consultamos se é o caso antes de fechar.';

const POL_MODELO_CORP =
  'Até 200 pessoas: 1 unidade profissional (5×5m, 5 níveis, 120 kg) resolve sem fila longa. De 200 a 400 pessoas: 1 unidade profissional + 4-5 horas de operação ou 2 unidades em paralelo. Acima de 400: gigante (6×6m) ou 2 profissionais. Em dúvida, conte o número esperado de adultos interessados em subir (geralmente 30-40% do total) e dimensionamos juntos.';

// Info gain real: janelas de confraternização RJ + climatologia INMET
const FAQ_CALENDARIO_EMPRESA_2026 = {
  p: 'Qual a melhor janela pra confraternização de fim de ano no Rio e quando reservar?',
  r: 'A demanda de confraternização corporativa no Rio concentra em <strong>duas janelas</strong>: (1) <strong>novembro</strong> (sobretudo semanas 9-23/nov) — antes do rush de natal e com clima ainda estável; (2) <strong>primeira quinzena de dezembro</strong> (1-14/dez) — após isso, executives entram em férias escalonadas. Climatologicamente, <strong>novembro já tem 12 dias de chuva</strong> (INMET), então se o evento for outdoor, prefira cobertura ou tendas. <strong>Junho corporativo</strong> (festa junina da empresa) costuma ser segunda semana de junho — Reserve <strong>45-60 dias antes</strong> pras janelas de pico de novembro-dezembro e <strong>30 dias</strong> pra junho. Última semana de dezembro: evitar — viagens de natal esvaziam o evento.',
};

export const PAGINAS_FESTA_EMPRESA: IPagina[] = [
  // TIJUCA × FESTA EMPRESA
  montarPagina({
    bairro: 'tijuca',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização e festa de empresa na Tijuca — Clube Tijuca, Norte Shopping, Salão Lebre. Nota fiscal CNPJ, seguro de RC, laudo ABNT NBR 16.071.',
    preco_min: 1500,
    preco_max: 3500,
    faqs: [
      { p: 'Quais venues corporativos na Tijuca vocês atendem?', r: 'Atendemos: Clube Tijuca (salão de eventos), Norte Shopping (área de eventos), Casa de Festas Salão Lebre, espaços de Hotel da Saens Peña. Em venue com gerente, entregamos toda documentação ABNT NBR 16.071 + ART + apólice em 24h.' },
      { p: 'Emitem NF pra CNPJ de empresa na Tijuca?', r: POL_NF_CNPJ },
      { p: 'Qual modelo de touro pra confraternização de 100-300 funcionários?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Tijuca em festa corporativa noturna?', r: 'Saída Méier após 19h: 18-30 min. Em confraternização que começa 19h-20h, entregamos 16h-17h pra montar com conforto.' },
      { p: 'O seguro de RC cobre evento corporativo na Tijuca?', r: POL_SEGURO_CORP },
      { p: 'Como funciona a triagem de bebida em festa de empresa?', r: POL_BEBIDA_CORP },
      { p: 'Festa corporativa em salão de prédio da Tijuca: pé-direito é suficiente?', r: 'Prédios pós-2000 na Saens Peña: pé-direito 3m+, comportam profissional. Prédios comerciais (escritório com salão de eventos): verificar individualmente. Mande foto + medidas.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // BARRA DA TIJUCA × FESTA EMPRESA
  montarPagina({
    bairro: 'barra-da-tijuca',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa na Barra da Tijuca — Riocentro, Jeunesse Arena, Vivo Rio, casas de evento. NF CNPJ, seguro RC, laudo ABNT NBR 16.071.',
    preco_min: 1800,
    preco_max: 4500,
    faqs: [
      { p: 'Atendem Riocentro, Jeunesse Arena, Vivo Rio pra confraternização corporativa?', r: 'Sim, todos. Riocentro/Jeunesse Arena exigem laudo ABNT NBR 16.071 + ART + apólice RC R$ 300.000 + cadastro fornecedor 45 dias antes. Vivo Rio (Aterro) exige documentação 30 dias antes. Entregamos tudo em 24h.' },
      { p: 'Quais outros venues corporativos da Barra vocês atendem?', r: 'Casa Marambaia, Quinta da Boa Vista (eventos), Espaço Tom Jobim, Casas de Festa Outback, espaços da Av. das Américas e Sernambetiba. Em condomínio corporativo (torre empresarial com área de lazer), exige cadastro 48h antes.' },
      { p: 'Emitem NF pra CNPJ — processo pra evento corporativo na Barra?', r: POL_NF_CNPJ },
      { p: 'Qual modelo de touro pra confraternização de 200-500 funcionários na Barra?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Barra em confraternização noturna?', r: 'Saída Méier 17h-19h: 35-80 min (rush forte na Av. das Américas). Saída após 20h: 30-50 min. Recomendamos saída antes do rush (15h-16h) ou entrega 3h antes do início.' },
      { p: 'O seguro de RC cobre evento corporativo em Riocentro ou venue grande?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização de empresa?', r: POL_BEBIDA_CORP },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // COPACABANA × FESTA EMPRESA
  montarPagina({
    bairro: 'copacabana',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa em Copacabana — hotéis, ballrooms e espaços de eventos. NF CNPJ, seguro de RC R$ 300.000, laudo ABNT NBR 16.071.',
    preco_min: 1600,
    preco_max: 4000,
    faqs: [
      { p: 'Atendem hotéis de Copacabana pra confraternização corporativa?', r: 'Sim. Copacabana Palace (Belmond), Hilton, Pestana Rio, Hotel Atlântico, Caesar Park — todos já receberam nosso material. Exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 com cláusula hospitalidade + cadastro fornecedor 30 dias antes.' },
      { p: 'Cabe no ballroom de hotel de Copacabana o touro profissional?', r: 'Ballrooms de hotel têm pé-direito 4m+ e área 200m²+ — comporta profissional e gigante sem problema. Em ballroom menor (Pestana, Atlântico), confirmamos com gerente.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 100-400 funcionários em hotel?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Copacabana em confraternização noturna?', r: 'Saída Méier 19h-21h: 28-50 min via Túnel Rebouças. Recomendamos entrega 2h antes do início pra montar com folga.' },
      { p: 'O seguro de RC cobre evento corporativo em hotel de Copacabana?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // BOTAFOGO × FESTA EMPRESA
  montarPagina({
    bairro: 'botafogo',
    evento: 'festa-empresa',
    description:
      'Touro mecânico para confraternização corporativa em Botafogo, Flamengo e Aterro — Casa Daros, Cobal do Humaitá, espaços do Aterro. NF CNPJ, laudo ABNT NBR 16.071.',
    preco_min: 1400,
    preco_max: 3500,
    faqs: [
      { p: 'Quais venues corporativos em Botafogo/Flamengo vocês atendem?', r: 'Casa Daros (Rua General Severiano), Cobal do Humaitá (área de eventos), Espaço Tom Jobim (Aterro), casas de festa em Flamengo e Glória. Em venue com gerente, documentação ao gerente em 24h.' },
      { p: 'Atendem o Aterro do Flamengo pra confraternização ao ar livre?', r: 'Aterro exige autorização da Riotur + ART + apólice + alvará especial — processo de 60 dias com a Subprefeitura AP2. Atendemos quando a empresa já tem a autorização. Em condomínio com área verde no entorno do Aterro, sem burocracia.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 50-200 funcionários em Botafogo?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Botafogo em confraternização noturna?', r: 'Saída Méier 19h-22h: 25-45 min. Em confraternização que começa 19h, entregamos 16h-17h.' },
      { p: 'O seguro de RC cobre evento corporativo?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // RECREIO × FESTA EMPRESA
  montarPagina({
    bairro: 'recreio',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa no Recreio dos Bandeirantes e Pontal — espaços ao ar livre, sítios e casas de evento. NF CNPJ, laudo ABNT NBR 16.071.',
    preco_min: 1500,
    preco_max: 4000,
    faqs: [
      { p: 'Quais venues corporativos no Recreio vocês atendem?', r: 'Espaços ao ar livre da Av. Lúcio Costa, Estrada do Pontal, sítios de Vargem Grande e Guaratiba — ideal pro gigante (6×6m) em área externa. Em condomínio com salão amplo (Bahamas, Pontal Oceânico), confirmamos pé-direito e área.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 100-400 funcionários no Recreio?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Recreio em confraternização noturna?', r: 'Saída Méier 18h-20h: 50-80 min (rush Av. das Américas). Saída após 21h: 45-70 min. Recomendamos entrega 3h antes do início.' },
      { p: 'O seguro de RC cobre evento corporativo no Recreio?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      { p: 'Atendem sítio em Vargem Grande pra confraternização?', r: 'Sim. Sítio em Vargem Grande: 60-80 min do depósito. Confirmamos chão firme (touro não opera em areia solta ou grama mole), largura do portão (mínimo 1,80m) e área de queda 8×8m pro gigante. Mesma faixa de preço.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // JACAREPAGUÁ × FESTA EMPRESA
  montarPagina({
    bairro: 'jacarepagua',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa em Jacarepaguá, Taquara e Freguesia — casas de evento e espaços com área externa. NF CNPJ, laudo ABNT NBR 16.071.',
    preco_min: 1400,
    preco_max: 3500,
    faqs: [
      { p: 'Quais venues corporativos em Jacarepaguá vocês atendem?', r: 'Casas de evento em Taquara, Freguesia, Pechincha, Praça Seca com área externa generosa — ideais pra confraternização. Em condomínio corporativo ou resort urbano da Estrada dos Bandeirantes, exige cadastro 48h antes.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 80-250 funcionários em Jacarepaguá?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Jacarepaguá em confraternização noturna?', r: 'Taquara/Pechincha: 35-55 min. Freguesia: 45-70 min. Curicica: 55-90 min. Recomendamos entrega 2-3h antes do início.' },
      { p: 'O seguro de RC cobre evento corporativo em Jacarepaguá?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      { p: 'Atendem Itanhangá, Camorim, Anil com mesma faixa?', r: 'Sim. Itanhangá: 50-75 min. Camorim: 55-80 min. Anil: 35-55 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // VILA ISABEL × FESTA EMPRESA
  montarPagina({
    bairro: 'vila-isabel',
    evento: 'festa-empresa',
    description:
      'Touro mecânico para confraternização corporativa em Vila Isabel, Maracanã e Grajaú — clubes, quadras e espaços de evento. NF CNPJ, laudo ABNT NBR 16.071.',
    preco_min: 1300,
    preco_max: 3000,
    faqs: [
      { p: 'Quais venues corporativos em Vila Isabel/Maracanã vocês atendem?', r: 'Country Club Maracanã, quadra da Unidos de Vila Isabel, Clube Tijuca, Casa de Festas Boulevard 28, espaços de Grajaú. Em clube, entregamos documentação ao gerente em 24h.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 80-200 funcionários?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Vila Isabel em confraternização noturna?', r: 'Bairros vizinhos do depósito. Vila Isabel: 18-30 min. Grajaú: 25-45 min. Entrega 1-2h antes do início é mais que suficiente.' },
      { p: 'O seguro de RC cobre evento corporativo?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      { p: 'Confraternização em quadra de escola de samba em Vila Isabel — funciona?', r: 'Sim. Quadra da Unidos de Vila Isabel: pé-direito 3,2m+, área 8×8m, comporta gigante. Cobertura garante operação mesmo com chuva. Documentação ao gerente da quadra 15 dias antes.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // IPANEMA × FESTA EMPRESA
  montarPagina({
    bairro: 'ipanema',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa em Ipanema, Leblon e Arpoador — hotéis, clubes e espaços premium. NF CNPJ, seguro RC R$ 300.000, laudo ABNT NBR 16.071.',
    preco_min: 1800,
    preco_max: 5000,
    faqs: [
      { p: 'Atendem hotéis/clubes premium de Ipanema/Leblon pra confraternização?', r: 'Sim. Caesar Park, Fasano, Sol Ipanema, Belmond (Copacabana Palace), clubes Caiçaras e Country Club. Exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 cláusula hospitalidade + cadastro fornecedor 30 dias antes. Entregamos em 24h.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 100-300 funcionários em hotel de Ipanema?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Ipanema em confraternização noturna?', r: 'Saída Méier 19h-22h: 30-50 min via Túnel Rebouças. Recomendamos entrega 2h antes do início.' },
      { p: 'O seguro de RC cobre evento corporativo em hotel de Ipanema?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      { p: 'Atendem Leblon e Arpoador com mesma faixa?', r: 'Sim. Leblon: 35-75 min do depósito. Arpoador: 28-65 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // MÉIER × FESTA EMPRESA
  montarPagina({
    bairro: 'meier',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa no Méier, Cachambi e Engenho de Dentro. Bairro do depósito — entrega em 8-30 min. NF CNPJ, laudo ABNT NBR 16.071.',
    subtitle:
      'Touro mecânico profissional pra confraternização de empresa no Méier e bairros vizinhos da Zona Norte. Bairro do nosso depósito — entrega rápida garantida em 8-30 minutos. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000, NF CNPJ.',
    preco_min: 1200,
    preco_max: 3000,
    faqs: [
      { p: 'Quais venues corporativos no Méier vocês atendem?', r: 'Norte Shopping (área de eventos), Casa de Festas Méier, Casa do Padre, espaços de Cachambi e Engenho de Dentro. Toda casa de festa do eixo Méier-Cachambi-Piedade já recebeu nosso material.' },
      { p: 'Emitem NF pra CNPJ — como funciona pra empresa do Méier?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 50-200 funcionários no Méier?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega no Méier em confraternização noturna?', r: 'Bairro do depósito — 8-15 min em qualquer endereço. Em confraternização que começa 19h-20h, entregamos 16h-17h. Imprevisto no mesmo dia: 30-45 min.' },
      { p: 'O seguro de RC cobre evento corporativo no Méier?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      { p: 'Atendem Cachambi, Engenho de Dentro, Piedade com mesma faixa?', r: 'Sim. Cachambi: 5-15 min. Engenho de Dentro: 8-20 min. Piedade: 12-25 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),

  // MADUREIRA × FESTA EMPRESA
  montarPagina({
    bairro: 'madureira',
    evento: 'festa-empresa',
    description:
      'Touro mecânico profissional para confraternização corporativa em Madureira — Portela, Império Serrano, Galeria Madureira. NF CNPJ, laudo ABNT NBR 16.071, seguro de RC.',
    preco_min: 1200,
    preco_max: 3000,
    faqs: [
      { p: 'Quais venues corporativos em Madureira vocês atendem?', r: 'Quadra da Portela, quadra do Império Serrano, Galeria Comercial Madureira (eventos), Casa de Festas Madureira, Mercadão de Madureira (área de eventos privados). Quadras são cenários comuns de confraternização de empresa.' },
      { p: 'Emitem NF pra CNPJ?', r: POL_NF_CNPJ },
      { p: 'Qual modelo pra confraternização de 100-300 funcionários em Madureira?', r: POL_MODELO_CORP },
      { p: 'Tempo de entrega real Méier → Madureira em confraternização noturna?', r: 'Sábado noite/madrugada: 22-40 min (Mercadão fechado, ruas livres). Dia útil noite (20h-22h): 30-50 min. Recomendamos entrega 2h antes do início.' },
      { p: 'O seguro de RC cobre evento corporativo em Madureira?', r: POL_SEGURO_CORP },
      { p: 'Como funciona triagem de bebida em confraternização?', r: POL_BEBIDA_CORP },
      { p: 'Atendem Cascadura, Oswaldo Cruz, Campinho com mesma faixa?', r: 'Sim. Cascadura: 18-40 min. Oswaldo Cruz: 22-45 min. Campinho: 25-50 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_EMPRESA_2026,
    ],
  }),
];
