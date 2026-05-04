/**
 * 10 páginas geo de Formatura (concentração março, julho e dezembro).
 * Público típico: 21-28 anos, pico em fim de ano de graduação.
 */

import type { IPagina } from './schema';
import { montarPagina } from './factory-pagina';

const POL_IDADE_FORMATURA =
  'Pelo manual do fabricante e pela ABNT NBR 16.071, idade mínima de 14 anos pro modelo profissional. Em formatura, isso não costuma ser problema — público típico 21-28 anos. Operador checa idade só em irmãos/primos mais novos.';

const POL_BEBIDA =
  'O operador é treinado pra identificar visivelmente alcoolizado e barrar com cordialidade. Em formatura, isso é regra: o seguro de RC tem cláusula de exclusão pra usuário visivelmente embriagado, e a NBR 16.071 prevê barragem por motivo de segurança. Comunicamos a comissão antes do evento.';

const POL_NF_FORMATURA =
  'Sim, NF eletrônica de serviço com retenção tributária correta pra empresa de formatura ou comissão organizadora. CNAE 7729-2/03. Atendemos formaturas de comissões e empresas (Estação, Galo, Multi Formaturas, etc.) há tempos.';

// Substitui as FAQs "Antecedência mínima..." genéricas com info gain real:
// calendários acadêmicos UFRJ/UERJ/PUC + climatologia INMET por mês de colação.
const FAQ_CALENDARIO_FORMATURA_2026 = {
  p: 'Quando reservar e qual mês de colação dá menos conflito de demanda?',
  r: 'Os calendários acadêmicos da UERJ (Deliberação 41/2025), UFRJ e PUC-Rio concentram colação de grau em <strong>dezembro/2026 e janeiro/2027</strong> (semestre 2026.2) e <strong>julho/2026</strong> (semestre 2026.1) — 80% das formaturas privadas caem nessas janelas. Climatologicamente, <strong>julho é o melhor mês</strong> (média INMET 180 mm, 8 dias de chuva — segundo melhor do ano), enquanto <strong>novembro tem 13 dias de chuva</strong> (pior do ano) e dezembro 12. Reserve <strong>90 dias</strong> antes pra Riocentro/Maracanãzinho/hotel grande, <strong>60 dias</strong> pra clube/quadra de samba, <strong>45 dias</strong> pra casa de festas média.',
};

export const PAGINAS_FORMATURA: IPagina[] = [
  // TIJUCA × FORMATURA
  montarPagina({
    bairro: 'tijuca',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas na Tijuca — Maracanã Estádio, Clube Tijuca, Salão Lebre. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    faqs: [
      { p: 'Atendem o Maracanãzinho e o Estádio do Maracanã pra formatura?', r: 'Sim, ambos. Maracanã/Maracanãzinho exige laudo ABNT NBR 16.071 + ART do operador + apólice de RC R$ 300.000 + cadastro de fornecedor com 30 dias de antecedência. Documentação completa entregue em 24h.' },
      { p: 'Atendem clube Tijuca, Casa de Festas Salão Lebre e arredores?', r: 'Atendemos. Clube Tijuca, Casa de Festas Salão Lebre, Casa do Bispo, Sociedade Hípica — todos já receberam nosso material. Em casa de festas alugada, entregamos documentação ao gerente em 24h.' },
      { p: 'Tempo de operação ideal pra formatura com 200-400 formandos?', r: 'Pra formatura de 200-400 formandos, 4 horas de operação cobrem o pico (geralmente 22h-2h). Acima disso, fila fica longa demais — recomendamos 2 unidades em paralelo se forem mais de 400 pessoas.' },
      { p: 'Pode beber e subir no touro?', r: POL_BEBIDA },
      { p: 'Tempo de entrega real Méier → Tijuca em formatura noturna?', r: 'Saída de Méier após o rush (22h-23h): 15-25 min. Antes do rush (sábado tarde): 22-35 min. Em formatura que começa 22h, entregamos 19h-20h pra montar com folga.' },
      { p: 'Idade mínima pra subir no touro em formatura?', r: POL_IDADE_FORMATURA },
      { p: 'Emitem NF pra empresa de formatura?', r: POL_NF_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // BARRA DA TIJUCA × FORMATURA
  montarPagina({
    bairro: 'barra-da-tijuca',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas na Barra da Tijuca — Riocentro, Jeunesse Arena, Vivo Rio, Casa de Festas Outback. Laudo ABNT NBR 16.071, seguro RC.',
    faqs: [
      { p: 'Atendem Riocentro, Jeunesse Arena e Vivo Rio pra formatura?', r: 'Sim, todos. Riocentro/Jeunesse Arena exigem laudo ABNT NBR 16.071 + ART + apólice de RC R$ 300.000 + cadastro fornecedor 45 dias antes. Vivo Rio (Aterro) exige documentação 30 dias antes.' },
      { p: 'Casas de festa típicas de formatura na Barra que vocês atendem?', r: 'Atendemos: Casa de Festas Outback, Casa Marambaia, Quinta da Boa Vista (eventos), Espaço Tom Jobim, Riocentro Pavilhão 5. Toda casa de festa da Av. das Américas e Av. Sernambetiba já recebeu nosso material — basta indicar.' },
      { p: 'Tempo de operação ideal pra formatura com 300+ formandos na Barra?', r: 'Pra formatura grande (300+ formandos) na Barra, 4-6 horas de operação. Pico costuma ser 1h-3h. Pra evento de mais de 500 pessoas, recomendamos 2 unidades em paralelo (1 profissional + 1 gigante).' },
      { p: 'Tempo de entrega real Méier → Barra em formatura noturna?', r: 'Saída Méier 21h-22h: 30-50 min até a Barra (sem rush). Em sábado de formatura, recomendamos entrega 2-3h antes do início.' },
      { p: 'Pode beber e subir no touro em formatura?', r: POL_BEBIDA },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      { p: 'Emitem NF pra empresa de formatura?', r: POL_NF_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // RECREIO × FORMATURA
  montarPagina({
    bairro: 'recreio',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas no Recreio dos Bandeirantes e Pontal — casas de festa e clubes do entorno. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    faqs: [
      { p: 'Casas de festa pra formatura no Recreio que vocês atendem?', r: 'Casas de festa do entorno do Posto 12, Av. Lúcio Costa, Estr. do Pontal — espaços com área externa generosa, ideais pro touro mecânico. Em casa de praia (Pontal), confirmamos chão firme antes de fechar.' },
      { p: 'Tempo de entrega real Méier → Recreio em formatura noturna?', r: 'Saída de Méier 21h-23h: 50-75 min até o Recreio (rush noturno fim de semana persiste). Recomendamos entrega 3h antes do início pra montar com folga.' },
      { p: 'Tempo de operação ideal pra formatura com 200 formandos no Recreio?', r: 'Pra formatura média (200 formandos), 4 horas de operação cobrem o pico (geralmente 23h-3h). Em festa que estende até amanhecer, +2h faz diferença na experiência.' },
      { p: 'Pode beber e subir no touro?', r: POL_BEBIDA },
      { p: 'Atendem Vargem Grande, Vargem Pequena, Guaratiba pra formatura?', r: 'Sim, mesma faixa de preço. Casa de sítio em Vargem Grande/Guaratiba é cenário comum de formatura — confirmamos chão firme (touro não opera em areia solta ou grama mole).' },
      { p: 'Idade mínima pra subir no touro em formatura?', r: POL_IDADE_FORMATURA },
      { p: 'Emitem NF pra empresa de formatura?', r: POL_NF_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // BOTAFOGO × FORMATURA
  montarPagina({
    bairro: 'botafogo',
    evento: 'formatura',
    description:
      'Touro mecânico (modelo profissional) para formaturas em Botafogo, Flamengo e Glória — Casa Daros, Cobal do Humaitá, Estácio Sá. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Casas de festa pra formatura em Botafogo que vocês atendem?', r: 'Casa Daros (Rua General Severiano), Cobal do Humaitá (área de eventos), Espaço Tom Jobim (Aterro), Casa do Choro (Lapa próxima) — todos já receberam nosso material. Em hotel da Zona Sul (Hotel Glória), exigem documentação 30 dias antes.' },
      { p: 'Atendem o Aterro do Flamengo pra formatura ao ar livre?', r: 'Aterro exige autorização da Riotur + ART + apólice + alvará especial — processo de 60 dias com a Subprefeitura da AP2. Atendemos, mas recomendamos uma casa de festa fechada por simplicidade.' },
      { p: 'Tempo de entrega real Méier → Botafogo em formatura noturna?', r: 'Saída Méier 21h-23h: 25-45 min até Botafogo (rush noturno do túnel persiste sextas). Em formatura, entrega 2h antes do início pra montagem confortável.' },
      { p: 'Tempo de operação ideal pra formatura com 150-250 formandos?', r: 'Pra formatura de 150-250 formandos em Botafogo, 4 horas de operação cobrem bem (22h-2h). Acima disso, ou aumenta a operação ou roda 2 unidades em paralelo.' },
      { p: 'Pode beber e subir no touro?', r: POL_BEBIDA },
      { p: 'Idade mínima pra subir no touro em formatura?', r: POL_IDADE_FORMATURA },
      { p: 'Emitem NF pra empresa de formatura?', r: POL_NF_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // IPANEMA × FORMATURA
  montarPagina({
    bairro: 'ipanema',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas em Ipanema, Leblon e Arpoador — hotéis, clubes e cobertura. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    faqs: [
      { p: 'Atendem hotel ou clube de Ipanema/Leblon pra formatura?', r: 'Sim. Hotéis (Caesar Park, Sol Ipanema, Fasano, Belmond Copacabana Palace) e clubes (Caiçaras, Country Club, Marina All Suítes) exigem laudo ABNT NBR 16.071 + ART + apólice de RC R$ 300.000 com cláusula de hospitalidade. Documentação 30 dias antes.' },
      { p: 'Cabe em cobertura de prédio em Ipanema/Leblon?', r: 'Cobertura com pé-direito 3m+ e área 7×7m: comporta o profissional. Mais comum em prédio anos 80-90. Mande foto + medidas pelo WhatsApp; respondemos em 30 minutos.' },
      { p: 'Onde estaciona a van em Vieira Souto/Delfim Moreira?', r: 'Coordenamos com porteiro pra usar vaga de carga e descarga. Vieira Souto bloqueada aos domingos pela manhã (até 13h, Lazer aberto): entregamos antes das 7h ou depois das 13h. Em formatura noturna, sem problema.' },
      { p: 'Tempo de entrega real Méier → Ipanema em formatura noturna?', r: 'Saída Méier 21h-23h: 30-50 min até Ipanema. Em formatura, entrega 2-3h antes do início pra montar com folga.' },
      { p: 'Tempo de operação ideal pra formatura em hotel/clube de Ipanema?', r: 'Formatura 200-400 formandos em hotel/clube: 4-6 horas de operação. Pico costuma ser 23h-3h. Em evento maior, 2 unidades em paralelo.' },
      { p: 'Pode beber e subir no touro em formatura?', r: POL_BEBIDA },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // COPACABANA × FORMATURA
  montarPagina({
    bairro: 'copacabana',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas em Copacabana e Leme — hotéis, ballrooms e coberturas. Laudo ABNT NBR 16.071, seguro RC R$ 300.000.',
    faqs: [
      { p: 'Atendem hotel/ballroom de Copacabana pra formatura?', r: 'Sim. Copacabana Palace (Belmond), Hilton, Pestana Rio, Hotel Atlântico — todos já receberam nosso material. Exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 com cláusula de hospitalidade + cadastro fornecedor 30 dias antes.' },
      { p: 'Cabe no ballroom típico de hotel de Copacabana?', r: 'Ballrooms de hotel grandes têm pé-direito 4m+ e área 200m²+ — comporta o profissional e o gigante sem problema. Em ballroom menor (Pestana, Atlântico), confirmamos com gerente.' },
      { p: 'Tempo de entrega real Méier → Copacabana em formatura noturna?', r: 'Saída Méier 21h-23h: 28-50 min até Copacabana. Recomendamos entrega 2h antes do início pra montar com folga.' },
      { p: 'Lei do silêncio em Copacabana se aplica a formatura em hotel?', r: 'Hotel é zona mista — formatura em ballroom interno não tem restrição de horário (estrutura preparada acusticamente). Em festa em terraço externo de hotel, segue Lei do Silêncio (3.268/01) — costuma ser permitido até 1h.' },
      { p: 'Tempo de operação ideal pra formatura de 250-500 formandos?', r: 'Formatura grande em hotel: 5-6 horas de operação (22h-3h). Acima de 500 pessoas, 2 unidades em paralelo (profissional + gigante) cortam fila pela metade.' },
      { p: 'Pode beber e subir no touro?', r: POL_BEBIDA },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // VILA ISABEL × FORMATURA
  montarPagina({
    bairro: 'vila-isabel',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas em Vila Isabel, Maracanã, Grajaú — quadras de escola de samba, clubes e casas de festa. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Atendem quadra de escola de samba (Unidos de Vila Isabel) pra formatura?', r: 'Sim. Quadra da Unidos de Vila Isabel é cenário comum de formatura — pé-direito 3,2m+ e área 8×8m comportam o gigante. Quadra coberta também garante operação mesmo com chuva (NBR não invalida estrutura coberta).' },
      { p: 'Atendem o Maracanãzinho e estádio do Maracanã pra formatura?', r: 'Sim, ambos. Maracanã/Maracanãzinho exigem laudo ABNT NBR 16.071 + ART + apólice RC R$ 300.000 + cadastro fornecedor com 30-45 dias de antecedência. Documentação completa em 24h.' },
      { p: 'Tempo de entrega real Méier → Vila Isabel/Maracanã em formatura noturna?', r: 'Bairros vizinhos do depósito — 18-30 min em horário tranquilo, 25-45 min em rush noturno. Em formatura, entrega 2h antes do início.' },
      { p: 'Casas de festa típicas pra formatura em Vila Isabel/Grajaú?', r: 'Casa de Festas Castelo Branco (Vila Isabel), Quadra da Unidos de Vila Isabel, Country Club Maracanã, Espaço Boulevard 28 — atendemos todos. Em quadra de escola de samba, exigem documentação ao gerente 15 dias antes.' },
      { p: 'Tempo de operação ideal pra formatura com 200-400 formandos?', r: '4-5 horas de operação cobrem o pico (22h-3h). Em formatura grande de quadra, 2 unidades em paralelo cortam fila pela metade.' },
      { p: 'Pode beber e subir no touro em formatura?', r: POL_BEBIDA },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // JACAREPAGUÁ × FORMATURA
  montarPagina({
    bairro: 'jacarepagua',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas em Jacarepaguá, Taquara, Freguesia e Pechincha — casas de festa, clubes e quadras. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Casas de festa pra formatura em Jacarepaguá que vocês atendem?', r: 'Casas de festa em Taquara, Freguesia, Pechincha, Praça Seca — espaços com área externa generosa típicos do bairro. Em condomínio fechado, exigem cadastro de fornecedor 48h antes na portaria.' },
      { p: 'Tempo de entrega real Méier → Jacarepaguá em formatura noturna?', r: 'Taquara/Pechincha (próximo Linha Amarela): 30-50 min. Freguesia: 40-60 min. Curicica: 50-75 min. Recomendamos entrega 2-3h antes do início.' },
      { p: 'Tempo de operação ideal pra formatura média em Jacarepaguá?', r: '4-5 horas cobrem formatura de 150-300 formandos (22h-3h). Acima de 300, 2 unidades em paralelo.' },
      { p: 'Pode beber e subir no touro?', r: POL_BEBIDA },
      { p: 'Atendem Itanhangá, Camorim, Anil, Tanque com mesma faixa?', r: 'Sim. Itanhangá: 50-75 min. Camorim: 55-80 min. Anil: 35-55 min. Tanque: 40-60 min. Mesma faixa de preço.' },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      { p: 'Emitem NF pra empresa de formatura?', r: POL_NF_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // MÉIER × FORMATURA
  montarPagina({
    bairro: 'meier',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas no Méier, Cachambi, Engenho de Dentro — Norte Shopping eventos, casas de festa do bairro. Laudo ABNT NBR 16.071.',
    subtitle:
      'Touro mecânico profissional pra formaturas no Méier e bairros vizinhos da Zona Norte. Bairro do nosso depósito — entrega rápida garantida em 8-30 minutos. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    faqs: [
      { p: 'Casas de festa pra formatura no Méier que vocês atendem?', r: 'Casa de Festas Méier, Norte Shopping (área de eventos), Casa de Festas Cachambi, Casa do Padre — todos já receberam nosso material. Em casa de festa alugada, entregamos documentação ao gerente em 24h.' },
      { p: 'Tempo de entrega real no Méier em formatura noturna?', r: 'Bairro do nosso depósito — 8-15 min em qualquer endereço. Em formatura noturna, entrega 1-2h antes do início é mais que suficiente. Dia útil 18h-21h: 12-25 min (rush sentido bairro funciona a favor).' },
      { p: 'Tempo de operação ideal pra formatura com 150-300 formandos?', r: '4 horas cobrem formatura média (22h-2h). Pra formatura grande de Norte Shopping eventos (300+), 5-6 horas é o ideal.' },
      { p: 'Pode beber e subir no touro em formatura?', r: POL_BEBIDA },
      { p: 'Atendem Cachambi, Engenho de Dentro, Piedade com mesma faixa?', r: 'Sim. Cachambi: 5-15 min. Engenho de Dentro: 8-20 min. Piedade: 12-25 min. Toda Zona Norte do nosso eixo principal — mesma faixa de preço.' },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      { p: 'Emitem NF pra empresa de formatura?', r: POL_NF_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),

  // MADUREIRA × FORMATURA
  montarPagina({
    bairro: 'madureira',
    evento: 'formatura',
    description:
      'Touro mecânico profissional para formaturas em Madureira — quadra da Portela, Império Serrano, casas de festa do bairro. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Atendem quadra da Portela e Império Serrano pra formatura?', r: 'Sim. Quadra da Portela e quadra do Império Serrano são cenários comuns de formatura — pé-direito 3,2m+ e área 8×8m comportam o gigante. Documentação ao gerente da quadra em 24h.' },
      { p: 'Casas de festa pra formatura em Madureira que vocês atendem?', r: 'Casa de Festas Madureira, Casa de Festas Cascadura, Galeria Comercial Madureira (eventos), Mercadão de Madureira (área de eventos privados). Atendemos toda a região com frequência.' },
      { p: 'Tempo de entrega real Méier → Madureira em formatura noturna?', r: 'Sábado noite/madrugada: 22-40 min (Mercadão fechado, ruas livres). Sábado tarde: 45-60 min. Domingo: 25-40 min. Recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra formatura com 200-400 formandos?', r: '4-5 horas de operação cobrem (22h-3h). Em formatura de quadra de escola de samba (geralmente vai até amanhecer), 6 horas com revezamento de operadores.' },
      { p: 'Pode beber e subir no touro em formatura?', r: POL_BEBIDA },
      { p: 'Atendem Cascadura, Oswaldo Cruz, Campinho com mesma faixa?', r: 'Sim. Cascadura: 18-40 min. Oswaldo Cruz: 22-45 min. Campinho: 25-50 min. Mesma faixa de preço.' },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE_FORMATURA },
      FAQ_CALENDARIO_FORMATURA_2026,
    ],
  }),
];
