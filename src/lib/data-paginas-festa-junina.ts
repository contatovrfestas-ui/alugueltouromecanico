/**
 * 9 páginas geo de Festa Junina (Tijuca está em data-pagina-tijuca-festa-junina.ts).
 * Cobertura sazonal junho/julho 2026 — prioridade máxima do MVP.
 */

import type { IPagina } from './schema';
import { montarPagina } from './factory-pagina';

const POL_CHUVA =
  'Em caso de alerta laranja Climatempo/INMET com 24h de antecedência, reagendamos sem custo pra qualquer fim de semana de junho/julho/agosto. Se a chuva começar durante o evento, paramos a operação por norma ABNT NBR 16.071 seção 7.3 — o restante do tempo contratado vira crédito pra outra data. Política em linha com o Procon-RJ.';

const POL_IDADE =
  'Pelo manual do fabricante e pela norma ABNT NBR 16.071, idade mínima de 6 anos pro modelo infantil e 14 anos pro profissional. Nosso operador segue à risca — não é negociável, e isso protege o cliente em caso de fiscalização.';

const POL_NF =
  'Sim, NF eletrônica de serviço com retenção tributária correta. CNAE 7729-2/03 (locação de outros objetos pessoais e domésticos). Atendemos eventos corporativos com frequência.';

const POL_AVCB =
  'Casa própria, festa privada, até 100 pessoas, respeitando a Lei do Silêncio (Lei Municipal RJ 3.268/01) — não exige alvará. Acima de 100 pessoas em ambiente fechado, exige AVCB simplificado do Corpo de Bombeiros. Em condomínio, depende da convenção interna.';

// Combina Riotur 2026 (4 ondas de demanda + datas oficiais) com INMET (junho é bom mês climatológico)
// e substitui a FAQ "antecedência mínima" antiga (que era genérica).
const FAQ_CALENDARIO_2026 = {
  p: 'Quando reservar e qual fim de semana de junho dá menos conflito?',
  r: 'Pelo calendário Riotur 2026, a demanda concentra em 4 ondas: (1) <strong>13-14/jun</strong> — esquenta antes do São João, (2) <strong>20-21/jun</strong> — pico absoluto + arraiá oficial Riotur (Av. das Américas 5300 e 15500), (3) <strong>23-24/jun</strong> — véspera + São João (quarta em 2026, favorece festa empresa fim de tarde), (4) <strong>27-28/jun</strong> — "junina atrasada", baixa concorrência pública. Climatologicamente, junho é <strong>excelente</strong> pra outdoor: média INMET de 154 mm de chuva e 8 dias chuvosos, segundo melhor mês do ano. Reserve 60 dias antes pras ondas 1-2; 30-45 dias pra onda 4 (mais disponibilidade).',
};

export const PAGINAS_FESTA_JUNINA: IPagina[] = [
  // BARRA DA TIJUCA × FESTA JUNINA
  montarPagina({
    bairro: 'barra-da-tijuca',
    evento: 'festa-junina',
    description:
      'Touro mecânico para arraiás privados na Barra da Tijuca, Recreio e Jacarepaguá. Laudo ABNT NBR 16.071, seguro de RC, equipe credenciada em condomínios.',
    subtitle:
      'Touro mecânico inflável e profissional para arraiás e festas juninas privadas em condomínios da Barra da Tijuca (166 mil habitantes, Censo IBGE 2022), Recreio e Jacarepaguá. Saída do depósito em Méier, entrega em até 80 minutos contando rush da Av. das Américas. Laudo ABNT NBR 16.071 atualizado em janeiro/2026.',
    faqs: [
      { p: 'Como funciona a entrega em condomínio fechado da Barra?', r: 'Quase todo condomínio da Av. das Américas, Olegário Maciel e Sernambetiba exige cadastro prévio do veículo na portaria com 48h de antecedência. Mandamos placa, RG do operador e horário de chegada. Em condomínios da Península, o cadastro tem que ser feito pelo morador via app específico.' },
      { p: 'Cabe no salão de festa típico de prédio na Av. das Américas?', r: 'Salões padrão Cyrela/Even/Tegra na Barra costumam ter 40-80 m² com pé-direito 2,80–3,20m. Comporta o infantil tranquilamente. O profissional precisa de pé-direito 3,00m mínimo e 7×7m de footprint — confirme com foto + medidas pelo WhatsApp em 30 min.' },
      { p: 'E se chover no sábado de festa junina na Barra?', r: POL_CHUVA },
      { p: 'Tempo de entrega real considerando rush da Av. das Américas?', r: 'Saída do depósito em Méier: chegamos em 35 minutos no horário tranquilo (sábado de manhã, domingo cedo). Em rush sexta 17h-20h e sábado tarde 14h-17h, conta 60-80 minutos. Recomendamos entrega 2h antes do início da festa.' },
      { p: 'Atendem casa de festa em Itanhangá e Recreio com mesma faixa?', r: 'Sim. Itanhangá: 40-55 min do depósito. Recreio: 50-110 min dependendo do trecho. Mesma faixa de preço da Barra, sem custo logístico extra. Casa de praia no Recreio (Pontal): marcar entrega de manhã pra evitar rush da Av. das Américas pelo retorno.' },
      { p: 'Festa junina temática em casa própria com touro mecânico exige alvará?', r: POL_AVCB },
      { p: 'Qual a idade mínima pra subir no touro mecânico?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // COPACABANA × FESTA JUNINA
  montarPagina({
    bairro: 'copacabana',
    evento: 'festa-junina',
    description:
      'Touro mecânico inflável para arraiás privados em Copacabana, Leme e arredores. Laudo ABNT NBR 16.071, seguro de RC, operador profissional.',
    subtitle:
      'Touro mecânico inflável para arraiás e festas juninas privadas em Copacabana (170 mil habitantes na RA, Censo IBGE 2022) e Leme. Saída do depósito em Méier, entrega 30-60 min via Túnel Rebouças. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Onde estaciona a van de entrega em Copacabana?', r: 'Coordenamos com o porteiro do prédio pra usar a vaga de carga e descarga ou a vaga de visitante por 60-90 min. Em endereço sem garagem, usamos zona azul com estacionamento rotativo (R$ 8/h) — orçamos esse custo separado se aplicar. Túnel Velho: rush 17h-19h, recomendamos entrega antes ou depois.' },
      { p: 'Cabe no salão de festa de prédio típico de Copacabana?', r: 'Copacabana tem mistura de prédios — anos 50-60 (pé-direito 2,30-2,60m, só comporta infantil), anos 70-90 (2,80-3,00m, comporta profissional). Mande foto + altura medida do salão pelo WhatsApp; respondemos em 30 minutos qual modelo serve.' },
      { p: 'E se chover no sábado de festa junina em Copacabana?', r: POL_CHUVA },
      { p: 'Lei do silêncio em Copacabana: até que horas pode tocar forró?', r: 'Lei Municipal 3.268/01 (Lei do Silêncio do Rio): em zona residencial, som permitido até 22h em dias úteis e domingo, 23h sexta/sábado. Copacabana é mista (residencial + turística) — varia por subzona. Em prédio residencial, segue 22h/23h.' },
      { p: 'Atendem festa de casa em Leme e Botafogo com a mesma equipe?', r: 'Sim. Leme: 25-50 min do depósito, mesma faixa de preço. Botafogo: 25-55 min. Em festa de casa em Leme (rua de subida estreita pro Forte), confirmamos largura da rua antes de fechar.' },
      { p: 'Festa em hotel de Copacabana com touro mecânico — pode?', r: 'Pode, em área externa do hotel (terraço, piscina, área de eventos) ou ballroom com pé-direito 3m+. Hotéis exigem laudo ABNT NBR 16.071 + ART do operador + apólice de RC R$ 300.000 com cláusula de hospitalidade. Entregamos toda a documentação em 24h.' },
      { p: 'Qual a idade mínima pra subir no touro?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // BOTAFOGO × FESTA JUNINA
  montarPagina({
    bairro: 'botafogo',
    evento: 'festa-junina',
    description:
      'Touro mecânico infantil para arraiás privados em Botafogo, Humaitá e Flamengo. Pé-direito típico só comporta o infantil — laudo ABNT NBR 16.071, seguro de RC.',
    subtitle:
      'Touro mecânico inflável (modelo infantil) para arraiás privados em Botafogo (213.891 habitantes, Censo IBGE 2022 — único bairro da Zona Sul entre os 10 mais populosos do Rio), Humaitá e Flamengo. Importante: prédios típicos do bairro têm pé-direito de 2,30–2,60m, então só o infantil cabe. Saída de Méier, entrega em 25–55 min. Laudo ABNT NBR 16.071.',
    modelo: 'infantil',
    faqs: [
      { p: 'Por que vocês recomendam só o infantil em Botafogo?', r: 'Prédios anos 70-80 dominam Botafogo (Praia de Botafogo, Voluntários da Pátria, Arnaldo Quintela), com pé-direito de 2,30-2,60m em salão de festa. O profissional precisa de 3,00m mínimo, então só cabe em casa térrea ou condomínio novo. Mande foto + altura pelo WhatsApp pra confirmar.' },
      { p: 'Tempo de entrega real em Botafogo no rush 17h-19h?', r: 'Praia de Botafogo / túnel: rush forte de segunda a sexta 17h-19h. Saída do depósito em Méier: 25 min em horário tranquilo, até 55 min em rush. Recomendamos entrega antes das 16h em festa de sábado à tarde.' },
      { p: 'E se chover no sábado de festa junina em Botafogo?', r: POL_CHUVA },
      { p: 'Festa em casa de Humaitá tem mesma faixa de preço?', r: 'Sim. Humaitá: 22-45 min do depósito, mesma faixa. Cobrança Real Grandeza pode ter restrição em fim de semana — confirme acesso da rua antes de fechar.' },
      { p: 'Onde costuma rolar arraiá em Botafogo (referência local)?', r: 'Casa Daros (Rua General Severiano), Galeria Comercial Cobal do Humaitá, espaços do Estácio Sá, casas do entorno do Cemitério São João Batista. Atendemos esses endereços com frequência — checamos pé-direito e área de queda na chegada.' },
      { p: 'Festa privada em casa de Botafogo precisa de alvará?', r: POL_AVCB },
      { p: 'Idade mínima pra subir no touro infantil?', r: 'Pelo manual do fabricante e pela ABNT NBR 16.071, idade mínima de 6 anos pro infantil. Peso máximo 60 kg. Pra criança de 4-5 anos, oferecemos 1 minuto de "voltinha" no nível 1 com adulto presente — sem cobrar volta.' },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // RECREIO × FESTA JUNINA
  montarPagina({
    bairro: 'recreio',
    evento: 'festa-junina',
    description:
      'Touro mecânico profissional para arraiás privados no Recreio dos Bandeirantes, Vargem Grande e Pontal. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    subtitle:
      'Touro mecânico profissional para arraiás privados no Recreio dos Bandeirantes (149.961 habitantes, Censo IBGE 2022 — bairro com o maior crescimento populacional do Rio, +70,8% desde 2010), Vargem Grande e Pontal. Saída do depósito em Méier, entrega 50-110 min. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Tempo de entrega real do depósito até o Recreio?', r: 'Depósito em Méier → Recreio: 50-110 min dependendo do trecho. Recreio começo (Posto 12): 50-65 min. Pontal (Posto 5 do Recreio): 80-110 min. Rush de fim de semana após túnel da Grota Funda: 100-130 min. Recomendamos entrega 2-3h antes da festa.' },
      { p: 'Cabe em casa de praia / casa térrea do Recreio?', r: 'Sim, e o Recreio é o bairro ideal pro profissional e pro gigante: pé-direito alto, área de quintal generosa, sem condomínio com restrição forte. Confirmamos via WhatsApp largura do portão de entrada (mínimo 1,80m) e área de queda 8×8m pro gigante.' },
      { p: 'Condomínio fechado no Recreio: como funciona o cadastro?', r: 'Condomínios da Av. Lúcio Costa, Estr. Benvindo de Novaes e Pontal exigem cadastro prévio via portaria + autorização do morador. Recomendamos 48h de antecedência. Em alguns (Bahamas, Pontal Oceânico), o veículo entra pela portaria de serviço.' },
      { p: 'E se chover no sábado de festa junina no Recreio?', r: POL_CHUVA },
      { p: 'Atendem Vargem Grande, Vargem Pequena, Guaratiba?', r: 'Sim, com mesma faixa de preço. Vargem Grande: 60-80 min do depósito. Guaratiba: 80-100 min. Em casa de sítio, confirmamos chão firme (operação não roda em areia solta ou grama mole).' },
      { p: 'Festa junina pra escolinha particular do Recreio com 200 crianças — qual modelo?', r: 'Pra arraiá escolar com 200+ crianças (idade 6-12), recomendamos 2 unidades infantis em paralelo (4 horas) ou 1 unidade infantil + 1 brinquedo extra (cama elástica/touro de pelúcia). 1 unidade só cria fila de 30+ minutos e perde a graça.' },
      { p: 'Idade mínima pra subir?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // JACAREPAGUÁ × FESTA JUNINA
  montarPagina({
    bairro: 'jacarepagua',
    evento: 'festa-junina',
    description:
      'Touro mecânico profissional para arraiás privados em Jacarepaguá, Taquara, Freguesia e Pechincha. Laudo ABNT NBR 16.071, seguro de RC.',
    subtitle:
      'Touro mecânico profissional para arraiás privados em Jacarepaguá (RA com 653 mil moradores, Censo IBGE 2022 — uma das regiões que mais cresceu no Rio), Taquara, Freguesia e Pechincha. Saída do depósito em Méier, entrega 35-90 min. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Tempo de entrega real Méier → Jacarepaguá?', r: 'Depende muito do trecho de Jacarepaguá. Taquara/Pechincha (próximo à Linha Amarela): 35-55 min. Freguesia (centro): 45-70 min. Curicica/Camorim: 55-90 min. Recomendamos saída 2h antes da festa.' },
      { p: 'Cabe no salão de festa de condomínio em Jacarepaguá?', r: 'Condomínios novos da Estrada dos Bandeirantes, Estrada do Pau-Ferro e Praça Seca: salões com pé-direito 2,80-3,20m, comportam infantil e profissional. Casa de festa em Pechincha/Freguesia: pé-direito 3m+ é comum. Mande foto + medidas.' },
      { p: 'E se chover no sábado de festa junina em Jacarepaguá?', r: POL_CHUVA },
      { p: 'Festa junina em casa de festa de aluguel em Jacarepaguá: pode?', r: 'Pode. As principais casas de festa do bairro (em Taquara, Curicica, Pechincha) já conhecem nosso material e aceitam touro mecânico mediante laudo ABNT NBR 16.071 + apólice + ART. Entregamos toda a documentação ao gerente da casa em 24h.' },
      { p: 'Atendem Taquara, Freguesia e Pechincha com mesma faixa?', r: 'Sim, mesma faixa de preço. Tempo varia: Taquara 35-55 min, Freguesia 45-70 min, Pechincha 40-60 min. Itanhangá (Estrada da Barra): 55-80 min, mesma faixa.' },
      { p: 'Festa privada em casa de Pechincha precisa de alvará?', r: POL_AVCB },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // VILA ISABEL × FESTA JUNINA
  montarPagina({
    bairro: 'vila-isabel',
    evento: 'festa-junina',
    description:
      'Touro mecânico profissional para arraiás privados em Vila Isabel, Maracanã e Grajaú. Saída do depósito em Méier, entrega em 18-50 min. Laudo ABNT NBR 16.071.',
    subtitle:
      'Touro mecânico profissional para arraiás privados em Vila Isabel, Maracanã e Grajaú (Região Grande Tijuca, que perdeu 50 mil habitantes entre 2010 e 2022 segundo Censo IBGE — perfil familiar consolidado, alta densidade de quadras de samba e clubes). Bairros vizinhos do nosso depósito em Méier — entrega 18-50 min.',
    faqs: [
      { p: 'Tempo de entrega real Méier → Vila Isabel?', r: 'Distância curta — 18-50 min dependendo do trecho. Vila Isabel central (Boulevard 28 de Setembro): 18-30 min. Andaraí: 22-40 min. Próximo a Maracanã: 25-50 min. Bairro vizinho do nosso depósito.' },
      { p: 'Centro comercial de Vila Isabel tem restrição de carga?', r: 'Sim — restrição de veículos acima de 6 toneladas em horário comercial (8h-19h) no Boulevard e ruas adjacentes. Nossa van tem 2,5 toneladas, então passa, mas em festa em rua comercial preferimos entregar antes das 8h ou depois das 19h pra evitar trânsito.' },
      { p: 'Cabe no salão de festa de prédio típico de Vila Isabel?', r: 'Vila Isabel tem prédios anos 60-90 com pé-direito 2,60-2,90m em salão. Comporta o infantil sem problema; o profissional precisa de pé-direito 3m mínimo, comporta em prédio pós-2000. Mande foto + medidas pelo WhatsApp.' },
      { p: 'E se chover no sábado de festa junina em Vila Isabel?', r: POL_CHUVA },
      { p: 'Atendem Maracanã, Grajaú e Andaraí com mesma faixa?', r: 'Sim. Maracanã: 25-50 min, mesma faixa. Grajaú: 25-45 min, mesma faixa. Andaraí: 22-40 min. Bairros do nosso eixo principal.' },
      { p: 'Festa junina em quadra de escola samba ou bloco em Vila Isabel?', r: 'Atendemos quadras (Unidos de Vila Isabel, etc.) e blocos. Operação em quadra exige pé-direito 3,2m+ e área 8×8m — comporta o gigante. Cobertura de quadra normalmente garante operação mesmo com chuva (não invalida a NBR).' },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // IPANEMA × FESTA JUNINA
  montarPagina({
    bairro: 'ipanema',
    evento: 'festa-junina',
    description:
      'Touro mecânico inflável para arraiás privados em Ipanema, Leblon e Arpoador. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000, operador profissional.',
    subtitle:
      'Touro mecânico inflável para arraiás privados em Ipanema, Leblon e Arpoador — perfil de cobertura com pé-direito alto (3m+) que comporta o profissional, e salão de prédio anos 70-80 (2,60-2,90m) onde só cabe o infantil. Saída de Méier, entrega 28-75 min via Túnel Rebouças. Laudo ABNT NBR 16.071.',
    faqs: [
      { p: 'Onde estaciona a van de entrega em Ipanema?', r: 'Coordenamos com o porteiro pra usar vaga de carga e descarga (60-90 min são suficientes pra montar). Vieira Souto bloqueada aos domingos pela manhã (Lazer aberto): entregamos antes das 7h ou depois das 13h. Em rua sem porteiro, usamos zona azul.' },
      { p: 'Cabe em cobertura ou salão de festa de prédio em Ipanema?', r: 'Coberturas de Ipanema com pé-direito 3m+ comportam o profissional; salão de festa térreo de prédio anos 70-80 (Visc. de Pirajá, Henrique Dumont): pé-direito 2,60-2,90m, só comporta infantil. Mande foto + medidas pelo WhatsApp.' },
      { p: 'E se chover no sábado de festa junina em Ipanema?', r: POL_CHUVA },
      { p: 'Atendem Leblon e Arpoador com mesma faixa?', r: 'Sim. Leblon: 35-75 min do depósito. Arpoador: 28-65 min. Mesma faixa de preço. Em festa de casa de praia em Leblon (Av. Delfim Moreira), entrega manhã obrigatória.' },
      { p: 'Festa junina em hotel ou clube em Ipanema com touro mecânico?', r: 'Atendemos. Hotéis (Caesar Park, Sol Ipanema, Fasano) e clubes (Caiçaras) exigem laudo ABNT NBR 16.071 + ART do operador + apólice de RC R$ 300.000 com cláusula de hospitalidade. Documentação entregue em 24h.' },
      { p: 'Festa privada em casa de Ipanema precisa de alvará?', r: POL_AVCB },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // MÉIER × FESTA JUNINA
  montarPagina({
    bairro: 'meier',
    evento: 'festa-junina',
    description:
      'Touro mecânico profissional para arraiás privados no Méier, Cachambi, Engenho de Dentro e Piedade. Bairro do depósito — entrega em 8-30 min.',
    subtitle:
      'Touro mecânico profissional pra arraiás e festas juninas privadas no Méier (Região Administrativa com 352.595 moradores, Censo IBGE 2022) e bairros vizinhos da Zona Norte. Bairro do nosso depósito — entrega rápida garantida em 8-30 minutos. Laudo ABNT NBR 16.071, seguro de RC R$ 300.000.',
    faqs: [
      { p: 'Por que o Méier tem entrega tão rápida?', r: 'Nosso depósito fica no Méier — entrega em 8-15 min em qualquer endereço do bairro. Em festa de imprevisto (alguém cancelou e vocês ficaram com data livre), conseguimos chegar em 30-45 min mesmo no mesmo dia, mediante disponibilidade.' },
      { p: 'Cabe em salão de festa típico de prédio do Méier?', r: 'Méier tem prédios anos 70-90 com pé-direito 2,60-2,90m em salão. Comporta infantil sem restrição; profissional precisa de 3m mínimo, comporta em prédio pós-2000 ou casa térrea. Mande foto + altura medida pelo WhatsApp.' },
      { p: 'E se chover no sábado de festa junina no Méier?', r: POL_CHUVA },
      { p: 'Atendem Cachambi, Engenho de Dentro, Piedade e Lins com mesma faixa?', r: 'Sim. Cachambi: 5-15 min. Engenho de Dentro: 8-20 min. Piedade: 12-25 min. Lins de Vasconcelos: 10-22 min. Toda a região do nosso eixo principal — mesma faixa de preço, sem custo logístico.' },
      { p: 'Festa de quadra ou rua fechada no Méier: como funciona alvará?', r: 'Festa em rua fechada exige alvará da Riotur + ofício à Subprefeitura da AP3. Em festa de quadra de associação (privada), basta liberação interna. Atendemos quadras do bairro (Mercadinho São José, Norte Shopping eventos) com frequência.' },
      { p: 'Festa privada em casa do Méier precisa de alvará?', r: POL_AVCB },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),

  // MADUREIRA × FESTA JUNINA
  montarPagina({
    bairro: 'madureira',
    evento: 'festa-junina',
    description:
      'Touro mecânico profissional para arraiás privados em Madureira, Cascadura, Oswaldo Cruz e Campinho. Saída do depósito em Méier, entrega em 25-60 min.',
    subtitle:
      'Touro mecânico profissional para arraiás privados em Madureira (Região Administrativa com 305.445 moradores, Censo IBGE 2022 — uma das mais densas da Zona Norte e berço de duas grandes escolas de samba: Portela e Império Serrano), Cascadura, Oswaldo Cruz e Campinho. Saída de Méier, entrega 25-60 min.',
    faqs: [
      { p: 'Tempo de entrega real Méier → Madureira?', r: 'Depósito Méier → Madureira: 25-60 min dependendo do dia. Sábado de manhã (até 11h): 25-35 min. Sábado tarde (12h-18h): 45-60 min — Mercadão de Madureira fecha algumas vias. Domingo: 25-40 min. Recomendamos entrega antes das 11h em sábado.' },
      { p: 'Cabe no salão de festa de prédio em Madureira?', r: 'Madureira tem prédios anos 60-80 com pé-direito 2,40-2,80m em salão. Comporta infantil; profissional precisa de prédio mais novo (pós-2000) ou casa térrea. Mande foto + altura pelo WhatsApp pra confirmar.' },
      { p: 'E se chover no sábado de festa junina em Madureira?', r: POL_CHUVA },
      { p: 'Atendem Cascadura, Oswaldo Cruz, Campinho com mesma faixa?', r: 'Sim. Cascadura: 18-40 min. Oswaldo Cruz: 22-45 min. Campinho: 25-50 min. Mesma faixa de preço. Bairros do eixo Méier-Madureira-Cascadura — operação otimizada.' },
      { p: 'Festa em quadra de escola de samba (Portela, Império Serrano) com touro mecânico?', r: 'Sim, atendemos quadras de escola de samba. Exige pé-direito 3,2m+ e área 8×8m — comporta o gigante. Mediante apresentação de laudo ABNT NBR 16.071 + ART + apólice de RC. Entregamos a documentação em 24h.' },
      { p: 'Festa de rua fechada em Madureira: precisa de alvará?', r: 'Sim — rua fechada pra evento exige alvará da Riotur (até 1 mês antes) + ofício à Subprefeitura da AP3. Em festa privada de associação ou quadra, basta autorização interna. Casa: ver Lei do Silêncio.' },
      { p: 'Idade mínima pra subir no touro?', r: POL_IDADE },
      FAQ_CALENDARIO_2026,
    ],
  }),
];
