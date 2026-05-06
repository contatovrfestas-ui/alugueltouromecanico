/**
 * 10 páginas geo de Aniversário 18 Anos.
 * Modelo recomendado: profissional. Público típico 17-25 anos.
 * Demanda distribuída no ano, pico em dezembro/janeiro (final de ano escolar).
 */

import type { IPagina } from './schema';
import { montarPagina } from './factory-pagina';

const POL_IDADE_18 =
  'O touro profissional exige 14 anos mínimo pelo manual do fabricante e pela ABNT NBR 16.071. Na festa de 18 anos, o operador checa os irmãos/primos mais novos — quem tem entre 14-17 anos entra normalmente. Abaixo de 14 anos, não embarca no profissional; nesses casos oferecemos o infantil em paralelo se quiserem incluir as crianças.';

const POL_BEBIDA_18 =
  'Bebida alcoólica e touro mecânico não combinam — o seguro de RC tem cláusula de exclusão pra usuário visivelmente embriagado, e a ABNT NBR 16.071 prevê que o operador barre por motivo de segurança. Em festa de 18 anos, onde o público mistura maiores e menores, o operador reforça essa triagem. Comunicamos a família organizadora antes do evento.';

const POL_NF =
  'Sim, NF eletrônica de serviço com retenção tributária correta. CNAE 7729-2/03. Atendemos família que quer nota pra controle próprio ou para reembolso de CNPJ familiar.';

const POL_AVCB =
  'Casa própria, festa privada até 100 pessoas, respeitando a Lei do Silêncio (Lei Municipal RJ 3.268/01) — não exige alvará. Acima de 100 pessoas em ambiente fechado, exige AVCB simplificado do Corpo de Bombeiros. Em condomínio, depende da convenção interna.';

// Info gain: pico sazonal de festa de 18 + climatologia INMET RJ
const FAQ_CALENDARIO_18_2026 = {
  p: 'Qual a melhor época do ano pra festa de 18 anos no Rio e quando reservar?',
  r: 'Festas de 18 anos no Rio concentram em <strong>dezembro-janeiro</strong> (férias de fim de ano, coincide com colação escolar do Ensino Médio) e em <strong>julho</strong> (férias de inverno). Climatologicamente, <strong>junho, julho e agosto são os melhores meses</strong> para festa outdoor ou com abertura de janelas — INMET registra menos de 10 dias de chuva e temperatura agradável (20-26 °C). <strong>Novembro e março são os piores</strong> (12-13 dias chuvosos). Reserve <strong>45-60 dias antes</strong> em dezembro/janeiro (demanda alta), <strong>21-30 dias</strong> nos demais meses. Em final de semana com feriado prolongado, antecipe 60 dias independente do mês.',
};

export const PAGINAS_ANIVERSARIO_18: IPagina[] = [
  // TIJUCA × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'tijuca',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos na Tijuca, Vila Isabel e Maracanã. Casa de festas e salão de prédio. Laudo ABNT NBR 16.071, seguro de RC.',
    preco_min: 1200,
    preco_max: 2200,
    faqs: [
      { p: 'Quais casas de festa da Tijuca recebem touro mecânico pra festa de 18?', r: 'Atendemos com frequência: Casa de Festas Salão Lebre, Clube Tijuca, Casa do Bispo, Sociedade Hípica, espaços do entorno da Saens Peña. Em casa de festa alugada, entregamos laudo ABNT NBR 16.071 + ART + apólice de RC ao gerente em 24h.' },
      { p: 'Tempo de entrega real Méier → Tijuca em festa de 18 sábado à noite?', r: 'Saída do depósito em Méier após o rush (22h-23h): 15-25 min. Sábado tarde (14h-18h): 22-35 min. Em festa que começa às 22h, entregamos 19h-20h pra montar com folga.' },
      { p: 'Cabe no salão de festa de prédio típico da Tijuca?', r: 'Prédios pós-2000 na Saens Peña/Praça Saens Peña: pé-direito 2,80–3,20m, comportam o profissional. Prédios anos 70-80: 2,30–2,60m — só cabe o infantil. O profissional precisa de 3,00m mínimo. Mande foto + altura medida pelo WhatsApp; respondemos em 30 min.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 80-150 convidados?', r: 'Pra festa de 80-150 pessoas, 4 horas de operação cobrem todos que quiserem subir (pico costuma ser 23h-2h). Acima de 150 pessoas, ou amplia pra 5-6 horas ou coloca 2 unidades em paralelo pra não criar fila de 30+ minutos.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir no touro profissional?', r: POL_IDADE_18 },
      { p: 'Festa privada em casa da Tijuca precisa de alvará?', r: POL_AVCB },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // BARRA DA TIJUCA × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'barra-da-tijuca',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos na Barra da Tijuca, Recreio e Jacarepaguá. Condomínios e casas de festa. Laudo ABNT NBR 16.071, seguro de RC.',
    preco_min: 1300,
    preco_max: 2500,
    faqs: [
      { p: 'Quais espaços de festa de 18 anos na Barra vocês atendem?', r: 'Atendemos: Casa Marambaia, Quinta da Boa Vista (eventos), Espaço Tom Jobim, Casas de Festa da Av. das Américas e Sernambetiba, condomínios com salão amplo. Em espaço com gerente, entregamos documentação em 24h.' },
      { p: 'Festa de 18 em condomínio fechado da Barra: como funciona o cadastro?', r: 'Condomínios da Av. das Américas, Olegário Maciel e Sernambetiba exigem cadastro prévio do veículo na portaria com 48h de antecedência. Mandamos placa + RG do operador + horário. Em condomínios da Península, cadastro pelo app específico do morador.' },
      { p: 'Cabe no salão de festa de condomínio da Barra?', r: 'Salões padrão Cyrela/Even/Tegra/Carvalho Hosken: 40-80 m² com pé-direito 2,80–3,20m. Profissional precisa de 3,00m mín e 7×7m de footprint. Confirme com foto + medidas pelo WhatsApp em 30 min.' },
      { p: 'Tempo de entrega real Méier → Barra em festa de 18 sábado à noite?', r: 'Saída Méier 21h-22h: 30-50 min até a Barra (sem rush). Em sábado de festa, recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 100-200 convidados na Barra?', r: 'Pra festa grande (100-200 pessoas), 4-5 horas de operação no pico (22h-3h). Acima de 200, 2 unidades em paralelo cortam a fila pela metade.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir no touro profissional?', r: POL_IDADE_18 },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // COPACABANA × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'copacabana',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos em Copacabana e Leme — hotéis, clubes e salões de prédio. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1300,
    preco_max: 2500,
    faqs: [
      { p: 'Quais espaços de festa de 18 anos em Copacabana vocês atendem?', r: 'Hotéis (Hilton Copacabana, Pestana Rio, Hotel Atlântico) e casas de festa do bairro. Em hotel, exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 com cláusula de hospitalidade + cadastro de fornecedor 30 dias antes. Entregamos toda documentação em 24h.' },
      { p: 'Cabe no salão de festa de prédio típico de Copacabana?', r: 'Copacabana tem mistura de prédios — anos 50-60 (pé-direito 2,30-2,60m, só infantil), anos 70-90 (2,80-3,00m, comporta profissional). Profissional precisa de 3,00m mín. Mande foto + altura medida pelo WhatsApp.' },
      { p: 'Onde estaciona a van de entrega em Copacabana à noite?', r: 'Coordenamos com o porteiro pra usar vaga de carga e descarga (60-90 min são suficientes pra montar). À noite, zona azul fica liberada. Em festa em rua sem garagem, estacionamento em zona azul sem custo após 21h.' },
      { p: 'Tempo de entrega real Méier → Copacabana em festa de 18 sábado à noite?', r: 'Saída Méier 21h-23h: 28-50 min via Túnel Rebouças. Recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 80-150 convidados em Copa?', r: '4 horas de operação cobrem a festa. Pico costuma ser 23h-2h. Acima de 150 pessoas, 5-6 horas ou 2 unidades.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Lei do silêncio em Copacabana: até que horas pode ter som na festa de 18?', r: 'Lei Municipal RJ 3.268/01: em zona residencial, som até 22h em dias úteis/domingo, 23h sexta/sábado. Copacabana é mista (residencial + turística) — em prédio residencial, segue 22h/23h. Em hotel/ballroom interno, sem restrição de horário (estrutura preparada acusticamente).' },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // BOTAFOGO × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'botafogo',
    evento: 'aniversario-18',
    description:
      'Touro mecânico para festa de 18 anos em Botafogo, Humaitá e Flamengo. Pé-direito típico do bairro pode limitar modelo — laudo ABNT NBR 16.071, seguro de RC.',
    preco_min: 1100,
    preco_max: 2200,
    faqs: [
      { p: 'Quais espaços de festa de 18 em Botafogo vocês atendem?', r: 'Casa Daros (Rua General Severiano), Cobal do Humaitá (área de eventos), Espaço Tom Jobim (Aterro), casas de festa de Flamengo. Todos já receberam nosso material. Em casa de festa alugada, documentação ao gerente em 24h.' },
      { p: 'Por que recomendam o infantil em alguns prédios de Botafogo?', r: 'Prédios anos 70-80 dominam o bairro (pé-direito 2,30-2,60m em salão). O profissional precisa de 3,00m mínimo — só cabe em prédio novo, cobertura ou casa térrea. Se o salão for em casa de festa própria, normalmente comporta o profissional. Mande foto + medidas.' },
      { p: 'Tempo de entrega real Méier → Botafogo em festa de 18 noturna?', r: 'Saída Méier 21h-23h: 25-45 min (rush noturno do túnel persiste sextas). Recomendamos entrega 2h antes do início da festa.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 80-120 convidados em Botafogo?', r: '4 horas de operação cobrem bem (22h-2h). Pra festa em espaço aberto (Aterro do Flamengo), confirmar autorização + horário limite com a Riotur.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir no touro profissional?', r: POL_IDADE_18 },
      { p: 'Festa privada em casa de Botafogo precisa de alvará?', r: POL_AVCB },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // RECREIO × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'recreio',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos no Recreio dos Bandeirantes, Pontal e Vargem Grande. Casas térreas e quintal. Laudo ABNT NBR 16.071.',
    preco_min: 1200,
    preco_max: 2500,
    faqs: [
      { p: 'Quais espaços de festa de 18 no Recreio vocês atendem?', r: 'Casas de festa do entorno do Posto 12, Av. Lúcio Costa, Estrada do Pontal — espaços com área externa generosa, ideais pro profissional. Casa de praia ou casa térrea no Pontal: confirmamos largura do portão (mínimo 1,80m) e chão firme antes de fechar.' },
      { p: 'Festa de 18 em condomínio fechado do Recreio: como funciona?', r: 'Condomínios da Av. Lúcio Costa, Estr. Benvindo de Novaes e Pontal exigem cadastro 48h antes. Em alguns (Bahamas, Pontal Oceânico), o veículo entra pela portaria de serviço. Salões de condomínio do Recreio costumam ter pé-direito 3m+ — comportam o profissional.' },
      { p: 'Tempo de entrega real Méier → Recreio em festa de 18 sábado à noite?', r: 'Saída Méier 21h-23h: 50-75 min até o Recreio (rush noturno de fim de semana persiste). Recomendamos entrega 3h antes do início pra montar com folga.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 100-200 convidados no Recreio?', r: 'Pra festa de 100-200 pessoas, 4-5 horas de operação (22h-3h). Em festa de madrugada, pico concentrado entre 23h-2h. Acima de 200, 2 unidades em paralelo.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir?', r: POL_IDADE_18 },
      { p: 'Atendem Vargem Grande, Vargem Pequena, Guaratiba com mesma faixa?', r: 'Sim. Vargem Grande: 60-80 min. Guaratiba: 80-100 min. Mesma faixa de preço. Em casa de sítio, confirmamos chão firme (touro não opera em areia solta ou grama mole).' },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // JACAREPAGUÁ × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'jacarepagua',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos em Jacarepaguá, Taquara, Freguesia e Pechincha. Casas de festa e condomínios. Laudo ABNT NBR 16.071.',
    preco_min: 1100,
    preco_max: 2200,
    faqs: [
      { p: 'Quais casas de festa em Jacarepaguá vocês atendem pra festa de 18?', r: 'Atendemos casas de festa em Taquara, Freguesia, Pechincha, Praça Seca — espaços com área externa generosa típicos do bairro. Em condomínio fechado, exigem cadastro de fornecedor 48h antes na portaria.' },
      { p: 'Tempo de entrega real Méier → Jacarepaguá em festa de 18 noturna?', r: 'Taquara/Pechincha (próximo Linha Amarela): 35-55 min. Freguesia: 45-70 min. Curicica: 55-90 min. Recomendamos entrega 2-3h antes do início.' },
      { p: 'Cabe no salão de festa de condomínio em Jacarepaguá?', r: 'Condomínios novos da Estrada dos Bandeirantes, Estrada do Pau-Ferro e Praça Seca: salões com pé-direito 2,80–3,20m, comportam profissional. Casa de festa em Pechincha/Freguesia: pé-direito 3m+ é comum. Mande foto + medidas.' },
      { p: 'Tempo de operação ideal pra festa de 18 média em Jacarepaguá?', r: '4-5 horas cobrem festa de 80-200 convidados (22h-3h). Acima de 200, 2 unidades em paralelo.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir?', r: POL_IDADE_18 },
      { p: 'Atendem Itanhangá, Anil, Tanque com mesma faixa?', r: 'Sim. Itanhangá: 50-75 min. Anil: 35-55 min. Tanque: 40-60 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // VILA ISABEL × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'vila-isabel',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos em Vila Isabel, Maracanã e Grajaú. Casa de festas, clubes e salão de prédio. Laudo ABNT NBR 16.071.',
    preco_min: 1100,
    preco_max: 2200,
    faqs: [
      { p: 'Quais espaços de festa de 18 em Vila Isabel vocês atendem?', r: 'Atendemos: Casa de Festas Castelo Branco, Casa de Festas Boulevard 28, quadra da Unidos de Vila Isabel, Country Club Maracanã, espaços do Grajaú. Toda casa de festa do eixo Vila Isabel-Grajaú já recebeu nosso material.' },
      { p: 'Tempo de entrega real Méier → Vila Isabel em festa de 18 noturna?', r: 'Bairros vizinhos do depósito. Vila Isabel central: 18-30 min. Grajaú: 25-45 min. Andaraí: 22-40 min. Entrega 1-2h antes do início é mais que suficiente.' },
      { p: 'Cabe no salão de festa de prédio típico de Vila Isabel?', r: 'Vila Isabel tem prédios anos 60-90 com pé-direito 2,60-2,90m em salão. Profissional precisa de 3m mín — só cabe em prédio pós-2000 ou casa térrea. Mande foto + altura medida pelo WhatsApp.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 80-150 convidados?', r: '4 horas de operação cobrem o pico (22h-2h). Em festa em quadra de escola de samba (espaço maior), 5-6 horas faz sentido.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir?', r: POL_IDADE_18 },
      { p: 'Festa de 18 em quadra de escola de samba em Vila Isabel — como funciona?', r: 'Quadra da Unidos de Vila Isabel e similares têm pé-direito 3,2m+ e área 8×8m — comportam o gigante. Documentação ao gerente da quadra em 24h. Quadra coberta garante operação mesmo com chuva.' },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // IPANEMA × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'ipanema',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos em Ipanema, Leblon e Arpoador. Hotéis, clubes e coberturas. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1400,
    preco_max: 2800,
    faqs: [
      { p: 'Quais espaços de festa de 18 em Ipanema/Leblon vocês atendem?', r: 'Atendemos: Caesar Park, Sol Ipanema, Fasano (área de eventos), clubes Caiçaras e Country Club, casas de cobertura de Ipanema/Leblon. Hotéis e clubes exigem laudo ABNT NBR 16.071 + ART + RC R$ 300.000 com cláusula de hospitalidade 30 dias antes.' },
      { p: 'Cabe em cobertura de prédio em Ipanema/Leblon pra festa de 18?', r: 'Coberturas com pé-direito 3m+ e área 7×7m comportam o profissional. Mais comum em prédios anos 80-90. Mande foto + medidas pelo WhatsApp; respondemos em 30 minutos.' },
      { p: 'Onde estaciona a van à noite em Ipanema?', r: 'À noite, zona azul fica liberada — coordenamos logística com o porteiro. Vieira Souto bloqueada aos domingos pela manhã (até 13h): em festa de 18 noturna, sem problema.' },
      { p: 'Tempo de entrega real Méier → Ipanema em festa de 18 noturna?', r: 'Saída Méier 21h-23h: 30-50 min até Ipanema. Recomendamos entrega 2h antes do início pra montar com folga.' },
      { p: 'Tempo de operação ideal pra festa de 18 em hotel/cobertura de Ipanema?', r: 'Festa de 80-200 convidados: 4-5 horas de operação (22h-3h). Pico costuma ser 23h-2h. Acima de 200, 2 unidades em paralelo.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir?', r: POL_IDADE_18 },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // MÉIER × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'meier',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos no Méier, Cachambi, Engenho de Dentro e Piedade. Bairro do depósito — entrega em 8-30 min.',
    subtitle:
      'Touro mecânico profissional pra festa de 18 anos no Méier e bairros vizinhos da Zona Norte. Bairro do nosso depósito — entrega rápida garantida em 8-30 minutos. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    preco_min: 1000,
    preco_max: 2000,
    faqs: [
      { p: 'Por que o Méier tem entrega tão rápida em festa de 18?', r: 'Nosso depósito fica no Méier — entrega em 8-15 min em qualquer endereço do bairro. Em festa de imprevisto (alguém cancelou e ficaram com data livre), conseguimos chegar em 30-45 min no mesmo dia, mediante disponibilidade.' },
      { p: 'Quais espaços de festa de 18 no Méier vocês atendem?', r: 'Casa de Festas Méier, Norte Shopping (área de eventos), Casa de Festas Cachambi, Casa do Padre, espaços de Engenho de Dentro. Toda casa de festa do eixo Méier-Cachambi-Piedade já recebeu nosso material.' },
      { p: 'Cabe no salão de festa de prédio típico do Méier?', r: 'Méier tem prédios anos 70-90 com pé-direito 2,60-2,90m em salão. Profissional precisa de 3m mín — só cabe em prédio pós-2000 ou casa térrea. Mande foto + altura pelo WhatsApp.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 80-150 convidados?', r: '4 horas cobrem a festa (22h-2h). Em Norte Shopping eventos (300+), 5-6 horas com revezamento de operadores.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir?', r: POL_IDADE_18 },
      { p: 'Atendem Cachambi, Engenho de Dentro, Piedade com mesma faixa?', r: 'Sim. Cachambi: 5-15 min. Engenho de Dentro: 8-20 min. Piedade: 12-25 min. Mesma faixa de preço — toda a região do eixo principal.' },
      FAQ_CALENDARIO_18_2026,
    ],
  }),

  // MADUREIRA × ANIVERSÁRIO 18
  montarPagina({
    bairro: 'madureira',
    evento: 'aniversario-18',
    description:
      'Touro mecânico profissional para festa de 18 anos em Madureira, Cascadura, Oswaldo Cruz e Campinho. Quadras de escola de samba e casas de festa. Laudo ABNT NBR 16.071.',
    preco_min: 1000,
    preco_max: 2000,
    faqs: [
      { p: 'Quais espaços de festa de 18 em Madureira vocês atendem?', r: 'Atendemos: quadra da Portela, quadra do Império Serrano, Casa de Festas Madureira, Galeria Comercial Madureira (eventos), Casa de Festas Cascadura. Todos já receberam nosso material. Em quadra de escola de samba, documentação ao gerente em 24h.' },
      { p: 'Festa de 18 em quadra da Portela ou Império Serrano — como funciona?', r: 'Quadras têm pé-direito 3,2m+ e área 8×8m — comportam o gigante. Cobertura de quadra garante operação mesmo com chuva. Documentação ao gerente 15 dias antes. Em festa de 18 com 200+ convidados, 2 unidades em paralelo.' },
      { p: 'Tempo de entrega real Méier → Madureira em festa de 18 sábado à noite?', r: 'Sábado noite/madrugada: 22-40 min (Mercadão fechado, ruas livres). Sábado tarde: 45-60 min. Recomendamos entrega 2h antes do início.' },
      { p: 'Tempo de operação ideal pra festa de 18 com 100-200 convidados?', r: '4-5 horas de operação cobrem (22h-3h). Em festa de quadra de escola de samba (vai até amanhecer), 6 horas com revezamento de operadores.' },
      { p: 'Pode beber e subir no touro em festa de 18?', r: POL_BEBIDA_18 },
      { p: 'Qual a idade mínima pra subir?', r: POL_IDADE_18 },
      { p: 'Atendem Cascadura, Oswaldo Cruz, Campinho com mesma faixa?', r: 'Sim. Cascadura: 18-40 min. Oswaldo Cruz: 22-45 min. Campinho: 25-50 min. Mesma faixa de preço.' },
      FAQ_CALENDARIO_18_2026,
    ],
  }),
];
