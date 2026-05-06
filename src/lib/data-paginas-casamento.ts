/**
 * 10 páginas geo de Casamento.
 * Modelo recomendado: profissional. Público típico: adulto misto.
 * Pico: junho-julho e outubro-novembro no Rio.
 */

import type { IPagina } from './schema';
import { montarPagina } from './factory-pagina';

const POL_CERIMONIALISTA =
  'O operador faz check-in com o cerimonialista na chegada pra alinhar: horário de montagem, local da instalação dentro do espaço, ordem do programa (quando abre a atração). Em casamento, o profissional do touro opera de forma discreta e coordenada — o cerimonialista tem controle do timing da abertura.';

const POL_BEBIDA_CASAMENTO =
  'O operador barra visivelmente embriagado com cordialidade. Em casamento, onde bebida alcoólica está presente, o operador reforça a triagem — o seguro de RC tem cláusula de exclusão pra usuário embriagado. Comunicamos ao casal e ao cerimonialista antes do início da operação.';

const POL_SEGURO_CASAMENTO =
  'Apólice de RC R$ 300.000 inclusa. Venues de casamento (hotel, haras, clube náutico) costumam exigir RC R$ 300.000 ou R$ 500.000 com cláusula de hospitalidade. Entregamos o documento completo em 24h. Se o venue exigir valor diferente, consultamos antes de fechar.';

const POL_FOTOS =
  'Sim, o touro mecânico gera fotos icônicas em casamento — noivo e noiva juntos no touro, pais, avós. O operador posiciona os convidados, ajusta velocidade pro nível 1-2 (suave) pra casamento e avisa antes da partida. Fotógrafo pode posicionar à vontade no espaço de queda (área inflável, sem risco).';

// Info gain: sazonalidade de casamento RJ + climatologia INMET
const FAQ_CALENDARIO_CASAMENTO_2026 = {
  p: 'Qual a melhor época pra casamento no Rio com touro mecânico e quando contratar?',
  r: 'No Rio de Janeiro, as <strong>duas grandes temporadas de casamento</strong> são: (1) <strong>junho-julho</strong> — clima seco e fresco (INMET: 154 mm e 8 dias de chuva em junho, 180 mm e 8 dias em julho — segundo e terceiro meses mais secos); (2) <strong>outubro-novembro</strong> — ainda sem o calor máximo do verão, clima agradável. Evitar <strong>janeiro-março</strong> (calor 38-40 °C + chuvas de verão: 150-250 mm/mês) e <strong>novembro</strong> pra outdoor (12 dias de chuva, o pior mês). Reserve o touro mecânico junto com o espaço de festas — geralmente <strong>90-120 dias antes</strong> pro casal não perder disponibilidade nos finais de semana de junho-julho.',
};

export const PAGINAS_CASAMENTO: IPagina[] = [
  // TIJUCA × CASAMENTO
  montarPagina({
    bairro: 'tijuca',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento na Tijuca, Vila Isabel e Maracanã. Operador coordena com cerimonialista. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1500,
    preco_max: 3000,
    faqs: [
      { p: 'Quais espaços de casamento na Tijuca vocês atendem?', r: 'Atendemos: Clube Tijuca, Casa do Bispo, Sociedade Hípica, salões de casamento do entorno da Saens Peña. Em espaço com gerente ou cerimonialista, entregamos toda documentação ABNT NBR 16.071 + ART + apólice em 24h.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'O touro mecânico combina com festa de casamento ou é muito informal?', r: 'Depende do estilo do casamento. Em casamento descontraído (tema country, festa junina, "festa de pista"), o touro é hit absoluto — gera o momento mais fotografado da noite. Em casamento mais formal (black tie), costuma funcionar na área externa ou depois da hora do jantar (madrugada). O casal define o timing com o cerimonialista.' },
      { p: 'Tempo de operação ideal pra casamento com 100-200 convidados?', r: '3-4 horas de operação cobrem o pico. Em casamento, o touro costuma operar de 22h-1h (após jantar, na fase de pista). Acima de 200 convidados interessados, 4-5 horas ou 2 unidades.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'Como funciona a triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      { p: 'O seguro de RC cobre casamento no Clube Tijuca?', r: POL_SEGURO_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // BARRA DA TIJUCA × CASAMENTO
  montarPagina({
    bairro: 'barra-da-tijuca',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento na Barra da Tijuca — Riocentro, Jeunesse Arena, haras e espaços de casamento da Av. das Américas. Laudo ABNT NBR 16.071.',
    preco_min: 1700,
    preco_max: 3500,
    faqs: [
      { p: 'Quais espaços de casamento na Barra vocês atendem?', r: 'Atendemos: Riocentro, Jeunesse Arena, haras em Itanhangá, Casa Marambaia, Quinta da Boa Vista (eventos), Espaço Tom Jobim, casas de casamento da Av. das Américas e Sernambetiba. Em espaço com cerimonialista, entregamos documentação em 24h.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Barra em casamento noturno?', r: 'Saída Méier após 20h: 30-50 min até a Barra (sem rush). Em casamento com início 18h-19h, entregamos 15h-16h pra montar com folga.' },
      { p: 'Tempo de operação ideal pra casamento com 100-300 convidados na Barra?', r: '3-4 horas de operação (22h-1h/2h). Em casamento grande (300+), 4-5 horas ou 2 unidades em paralelo.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      { p: 'O seguro de RC cobre casamento em Riocentro ou haras?', r: POL_SEGURO_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // COPACABANA × CASAMENTO
  montarPagina({
    bairro: 'copacabana',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento em Copacabana — Copacabana Palace, Hilton, Pestana Rio e ballrooms de hotel. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1700,
    preco_max: 3500,
    faqs: [
      { p: 'Atendem hotéis de casamento em Copacabana?', r: 'Sim. Copacabana Palace (Belmond), Hilton Copacabana, Pestana Rio, Hotel Atlântico — todos já receberam nosso material. Exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 cláusula hospitalidade + cadastro fornecedor 30 dias antes.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Copacabana em casamento noturno?', r: 'Saída Méier 19h-21h: 28-50 min via Túnel Rebouças. Recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra casamento em hotel de Copacabana?', r: '3-4 horas (22h-1h). Em casamento de 200+ convidados em hotel grande, 4-5 horas cobre melhor.' },
      { p: 'Pode tirar foto em cima do touro no Copacabana Palace?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento em hotel de Copacabana?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // BOTAFOGO × CASAMENTO
  montarPagina({
    bairro: 'botafogo',
    evento: 'casamento',
    description:
      'Touro mecânico para casamento em Botafogo, Humaitá e Flamengo — Casa Daros, Cobal do Humaitá, espaços do Aterro. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1400,
    preco_max: 3000,
    faqs: [
      { p: 'Quais espaços de casamento em Botafogo/Flamengo vocês atendem?', r: 'Casa Daros (Rua General Severiano), Cobal do Humaitá (área de eventos), Espaço Tom Jobim (Aterro), casas de festa em Flamengo e Glória. Em espaço com cerimonialista, documentação entregue em 24h.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Botafogo em casamento noturno?', r: 'Saída Méier 19h-22h: 25-45 min. Em casamento com início 19h, entregamos 16h-17h.' },
      { p: 'Tempo de operação ideal pra casamento de 80-200 convidados em Botafogo?', r: '3-4 horas (22h-1h). Em espaço do Aterro (quando autorizado), operação pra até madrugada é possível.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento em Casa Daros ou Cobal?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // RECREIO × CASAMENTO
  montarPagina({
    bairro: 'recreio',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento no Recreio dos Bandeirantes, Pontal e Vargem Grande — casas de campo, haras e espaços ao ar livre. Laudo ABNT NBR 16.071.',
    preco_min: 1500,
    preco_max: 3500,
    faqs: [
      { p: 'Quais espaços de casamento no Recreio/Pontal vocês atendem?', r: 'Haras e casas de campo em Itanhangá, sítios em Vargem Grande, espaços ao ar livre da Av. Lúcio Costa e Estrada do Pontal — cenários naturais de casamento. Em casa de campo, confirmamos chão firme (touro não opera em areia solta ou grama mole) e largura do portão (mínimo 1,80m).' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Recreio em casamento noturno?', r: 'Saída Méier 19h-21h: 50-80 min. Recomendamos saída no início da tarde pra casamento que começa 17h-18h.' },
      { p: 'Tempo de operação ideal pra casamento de 100-300 convidados no Recreio?', r: '3-4 horas (22h-1h). Em casamento em sítio que vai até amanhecer, 5-6 horas com revezamento.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento em haras ou sítio?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // JACAREPAGUÁ × CASAMENTO
  montarPagina({
    bairro: 'jacarepagua',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento em Jacarepaguá, Taquara e Freguesia — casas de casamento, haras e espaços com área externa. Laudo ABNT NBR 16.071.',
    preco_min: 1400,
    preco_max: 3000,
    faqs: [
      { p: 'Quais espaços de casamento em Jacarepaguá vocês atendem?', r: 'Casas de casamento em Taquara, Freguesia, Pechincha e Estrada dos Bandeirantes — espaços com área externa, jardim e salão. Em condomínio ou resort urbano, exige cadastro 48h antes.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Jacarepaguá em casamento noturno?', r: 'Taquara/Pechincha: 35-55 min. Freguesia: 45-70 min. Recomendamos entrega 2-3h antes do início.' },
      { p: 'Tempo de operação ideal pra casamento de 80-200 convidados em Jacarepaguá?', r: '3-4 horas (22h-1h) cobre o pico da pista. Em casamento que se estende, 5 horas.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento em espaço de eventos de Jacarepaguá?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // VILA ISABEL × CASAMENTO
  montarPagina({
    bairro: 'vila-isabel',
    evento: 'casamento',
    description:
      'Touro mecânico para casamento em Vila Isabel, Maracanã e Grajaú — clubes, quadras e casas de casamento. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1300,
    preco_max: 2800,
    faqs: [
      { p: 'Quais espaços de casamento em Vila Isabel/Maracanã vocês atendem?', r: 'Country Club Maracanã, quadra da Unidos de Vila Isabel, Clube Tijuca, Casa de Festas Boulevard 28, espaços de Grajaú. Todos já receberam nosso material.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Vila Isabel em casamento noturno?', r: 'Bairros vizinhos do depósito. Vila Isabel: 18-30 min. Grajaú: 25-45 min. Entrega 1-2h antes do início.' },
      { p: 'Tempo de operação ideal pra casamento de 80-200 convidados?', r: '3-4 horas (22h-1h). Em casamento em quadra de escola de samba (vai até amanhecer), 5-6 horas.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento no Country Club Maracanã?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // IPANEMA × CASAMENTO
  montarPagina({
    bairro: 'ipanema',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento em Ipanema, Leblon e Arpoador — hotéis premium, clubes e coberturas. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1800,
    preco_max: 4000,
    faqs: [
      { p: 'Atendem hotéis premium de casamento em Ipanema/Leblon?', r: 'Sim. Caesar Park, Sol Ipanema, Fasano, Marina All Suítes, Belmond — todos já receberam nosso material. Exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 cláusula hospitalidade + cadastro fornecedor 30 dias antes.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Ipanema em casamento noturno?', r: 'Saída Méier 19h-22h: 30-50 min via Túnel Rebouças. Recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra casamento em hotel/clube de Ipanema?', r: '3-4 horas (22h-1h). Em casamento de 200+ convidados, 4-5 horas ou 2 unidades.' },
      { p: 'Pode tirar foto em cima do touro com vista pra Ipanema?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento em hotel premium de Ipanema?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // MÉIER × CASAMENTO
  montarPagina({
    bairro: 'meier',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento no Méier, Cachambi e Engenho de Dentro. Bairro do depósito — entrega rápida. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    subtitle:
      'Touro mecânico profissional pra casamento no Méier e bairros vizinhos da Zona Norte. Bairro do nosso depósito — entrega rápida garantida em 8-30 minutos. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000, coordenação com cerimonialista.',
    preco_min: 1200,
    preco_max: 2800,
    faqs: [
      { p: 'Quais espaços de casamento no Méier vocês atendem?', r: 'Casa de Festas Méier, Norte Shopping (área de eventos), Casa do Padre, espaços de Cachambi e Engenho de Dentro. Toda casa de festa do eixo Méier-Cachambi-Piedade já recebeu nosso material.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega no Méier em casamento noturno?', r: 'Bairro do depósito — 8-15 min em qualquer endereço. Em casamento com início 18h, entregamos 15h-16h.' },
      { p: 'Tempo de operação ideal pra casamento de 80-150 convidados no Méier?', r: '3-4 horas (22h-1h) cobre o pico da pista com tranquilidade.' },
      { p: 'Pode tirar foto em cima do touro?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento no Méier?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),

  // MADUREIRA × CASAMENTO
  montarPagina({
    bairro: 'madureira',
    evento: 'casamento',
    description:
      'Touro mecânico profissional para casamento em Madureira — quadra da Portela, Império Serrano e casas de casamento do bairro. Laudo ABNT NBR 16.071, seguro de RC.',
    preco_min: 1200,
    preco_max: 2800,
    faqs: [
      { p: 'Quais espaços de casamento em Madureira vocês atendem?', r: 'Quadra da Portela, quadra do Império Serrano, Casa de Festas Madureira, Casa de Festas Cascadura — cenários de casamento com estilo carioca. Em quadra de escola de samba, documentação ao gerente 15 dias antes.' },
      { p: 'Como o operador se coordena com o cerimonialista?', r: POL_CERIMONIALISTA },
      { p: 'Tempo de entrega real Méier → Madureira em casamento noturno?', r: 'Sábado noite/madrugada: 22-40 min (Mercadão fechado, ruas livres). Recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra casamento de 100-300 convidados em Madureira?', r: '3-4 horas (22h-1h). Casamento em quadra de escola de samba vai até amanhecer — 5-6 horas com revezamento de operadores.' },
      { p: 'Pode tirar foto em cima do touro em casamento na quadra da Portela?', r: POL_FOTOS },
      { p: 'O seguro de RC cobre casamento em quadra de escola de samba?', r: POL_SEGURO_CASAMENTO },
      { p: 'Como funciona triagem de bebida em casamento?', r: POL_BEBIDA_CASAMENTO },
      FAQ_CALENDARIO_CASAMENTO_2026,
    ],
  }),
];
