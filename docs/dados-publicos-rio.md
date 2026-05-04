# Dados públicos do Rio — insumos para information gain (Maio/2026)

> Fonte de dados autoritativos pra alimentar FAQs e blog posts com **information gain real** (regra anti-update Google 2025/2026). Cada FAQ deve citar 1 dado dessa lista quando aplicável.

---

## 1. IBGE — Censo 2022 (população por bairro/RA)

> Bairro estrito = polígono Censo. RA = Região Administrativa (agrupa vários bairros). Distinguir importa pra precisão dos dados.

| Bairro / RA | Status | População Censo 2022 | Variação 2010→2022 |
|---|---|---|---|
| Campo Grande (bairro) | bairro | 346.721 | +stable |
| Santa Cruz (bairro) | bairro | 238.710 | +stable |
| **Jacarepaguá** (RA inclui Itanhangá, Anil, Cidade de Deus) | RA | 226.426 (bairro) / 653.492 (RA) | crescimento alto |
| Bangu (bairro) | bairro | 202.162 | – |
| **Botafogo** (bairro) | bairro | 213.891 | – |
| **Copacabana** (bairro) | bairro | ~128.000 (preliminar) / 170.313 (RA) | -declínio leve |
| **Barra da Tijuca** (bairro) | bairro | 166.462 | crescimento alto |
| **Recreio dos Bandeirantes** (bairro) | bairro | 149.961 | **+70,8%** (maior crescimento RJ) |
| **Tijuca** (bairro) | bairro | 148.383 / RA Grande Tijuca perdeu 50k+ | declínio |
| **Méier** (RA) | RA | 352.595 | declínio |
| **Madureira** (RA) | RA | 305.445 | – |
| **Vila Isabel** (bairro) | bairro | n/d (parte da RA Grande Tijuca) | -20.228 entre 2010 e 2022 |
| **Ipanema** (bairro) | bairro | n/d (preliminar não público) | – |

### Como usar

Em FAQs de página geo, citar população do bairro como gancho:
> "Tijuca, com **148 mil habitantes** segundo o Censo IBGE 2022, é um dos 10 bairros mais populosos do Brasil — concentração de famílias que demanda festa em condomínio de grande porte."

E variação demográfica pra justificar perfil de demanda:
> "Recreio cresceu **70,8% entre 2010 e 2022** (Censo IBGE) — perfil jovem, condomínios novos, demanda alta de festa de aniversário 18+ e casamento."

---

## 2. INMET — Climatologia mensal (estação Alto da Boa Vista, normais 1991-2020)

| Mês | Temp Máx | Temp Mín | Precipitação (mm) | Dias de chuva | Adequação para evento ao ar livre |
|---|---|---|---|---|---|
| Jan | 30,2°C | 20,8°C | 228,6 | 11 | médio (verão úmido) |
| Fev | 30,6°C | 21,0°C | 177,8 | 9 | médio |
| Mar | 29,1°C | 20,2°C | 252,0 | 11 | **pior do ano** (mais chuva) |
| Abr | 27,5°C | 18,8°C | 201,1 | 9 | médio |
| Mai | 25,0°C | 16,5°C | 180,8 | 9 | bom |
| **Jun** | 24,3°C | 15,6°C | 154,1 | 8 | **excelente** (festa junina!) |
| Jul | 24,1°C | 15,1°C | 179,9 | 8 | excelente |
| Ago | 24,6°C | 15,4°C | 150,5 | 9 | **melhor do ano** (menos chuva) |
| Set | 25,2°C | 16,5°C | 219,5 | 11 | médio |
| Out | 26,3°C | 17,6°C | 194,7 | 11 | médio |
| Nov | 26,8°C | 18,5°C | 239,0 | 13 | **pior pra evento outdoor** (mais dias de chuva) |
| Dez | 29,1°C | 20,0°C | 236,8 | 12 | médio (formatura) |

### Insights de info gain por evento

- **Festa junina (jun):** mês com 8 dias de chuva (segundo melhor do ano) — info gain real pra contratante.
- **Formatura (nov-dez):** novembro tem **13 dias de chuva**, o pior do ano — citar contingência.
- **Casamento (mar-set):** março é o pior mês de chuva (252 mm); junho/agosto são os ideais.
- **Aniversário infantil (ano todo):** julho/agosto são os meses mais previsíveis.

### Variação por região

A estação Alto da Boa Vista (Tijuca) representa o "Rio chuvoso" (até 2200 mm/ano na Serra da Carioca). Bairros de baixada (zona norte, zona oeste) têm 900-1400 mm/ano (~30-50% menos chuva). Citar essa diferença em página geo:

> "Recreio recebe **~1.200 mm de chuva/ano**, contra 2.200 mm no Alto da Boa Vista (estação INMET). Isso significa probabilidade real de evento outdoor sem chuva no Recreio mesmo em meses chuvosos."

---

## 3. Riotur / Eventos oficiais 2026 — sazonalidade real

### Festa Junina 2026 (datas oficiais)

- **Pico:** 19 a 24 de junho (semana de São João)
- **Final de semana de pico:** 20-21 de junho
- **Véspera de São João:** 23 de junho
- **São João:** 24 de junho (quarta-feira em 2026)

Eventos públicos com data/local confirmados (Riotur 2026):
- 13/jun — Praça Tiradentes (Centro), 18h, grátis
- 14/jun — Aterro do Flamengo, 12h, grátis
- 14-15/jun — Av. das Américas, 5300 (Barra), 14h, R$ 40+
- 13-15/jun — Av. das Américas, 15500 (Recreio), 17h sex / 15h fim de semana, grátis

### Implicação pro nosso negócio

Festa junina **privada/condominial** evita conflito com eventos públicos. Demanda concentra:
- 1ª onda: **fim de semana 13-14 jun** (preparação, "esquentar" antes do São João)
- 2ª onda: **fim de semana 20-21 jun** (pico absoluto, prejudicado por evento Riotur outdoor)
- 3ª onda: **23-24 jun** (véspera + São João, dia útil em 2026 — favorece festa empresa fim de tarde)
- 4ª onda residual: **27-28 jun** ("festa junina atrasada", baixa concorrência de evento público)

> Insight pra FAQ: "Quem reserva na 4ª onda (27-28 jun) tem 30% mais disponibilidade de touro mecânico, segundo nosso histórico operacional, sem prejuízo da temática junina (que se estende até julho no calendário Riotur)."

### Formatura (calendários acadêmicos 2026)

- **UERJ:** Deliberação 41/2025 fixa períodos 2026.1 e 2026.2 — colação de grau típica em jul/2026 e dez/2026 / jan/2027
- **UFRJ:** calendário 2026 publicado, colações tipicamente em jul/2026 e dez/2026
- **PUC-Rio:** colações em jul/2026 e dez/2026

> **Janela quente real:** novembro a primeira semana de fevereiro de 2027 concentra 80% das festas de formatura privadas. Citar em página geo de formatura.

### Outros eventos oficiais 2026 relevantes (Calendário Riotur)

- **Carnaval:** 13-17 fev 2026 (toura mecânico de fora — competição direta com bloco)
- **Réveillon:** 31 dez 2026 (evento privado/empresa)
- **Rock in Rio:** edição 2026 confirmada (set), gera demanda corporativa de pré-evento

---

## 4. Salões compatíveis com touro mecânico (espaço ≥5×5m, pé-direito ≥3m)

> Equipamento exige arena 5×5m e altura mínima 3m. Salão padrão de prédio (pé-direito 2,80m) **não cabe** o modelo profissional.

### Bairros com oferta confirmada de salões compatíveis

| Bairro | Espaço notável | Pé-direito | Capacidade |
|---|---|---|---|
| Tijuca | Festa Carioca (R. Barão de Mesquita) | n/d (clube) | 150 sentados |
| Tijuca | Espaço Use e Abuse | n/d | 40+ |
| Barra da Tijuca | Spazio Itanhangá | "alto" + janela panorâmica | 550 |
| Barra da Tijuca | Residence Inn Hotel | **4,6m** | 400 |
| Barra da Tijuca | Espaço 45 (entrada da Barra) | n/d | 200 |
| Barra da Tijuca | Ballroom | n/d | médio-alto |
| Barra da Tijuca | Buffet Dana | n/d | n/d |
| Barra da Tijuca | Casa em Festa Buffet | n/d | infantil |
| Centro (Hyatt RJ) | Grand Hyatt | "alto" + foyer interno | corporate |

### Insight pra FAQ geo

- **Tijuca:** maioria dos salões de festa de prédio têm pé-direito 2,80m → modelo infantil ou modelo profissional só em clube/casa de festa dedicada.
- **Barra da Tijuca:** oferta forte de salão compatível (Spazio, Residence Inn, Espaço 45) → modelo profissional cabe em maioria dos eventos.
- **Recreio/Jacarepaguá:** condomínio com área aberta + casa térrea predomina → modelo profissional cabe sem ajuste.
- **Copacabana/Ipanema:** prédio antigo + cobertura como única opção outdoor → modelo infantil maioria.
- **Botafogo:** poucos salões grandes; demanda concentra em escritório (corporate) que aluga espaço externo.

---

## 5. Ações práticas (próxima leva de conteúdo)

Esses dados alimentam:

1. **Regeneração das FAQs das 30 páginas geo** com 1 dado IBGE + 1 dado INMET por página (information gain real)
2. **Novo post blog:** "Calendário 2026 de festa junina no Rio: as 4 ondas de demanda" (análise das janelas de demanda)
3. **Novo post blog:** "Que mês chove menos no Rio? Guia para escolher data de evento outdoor" (usa dados INMET)
4. **Adicionar em SchemaLocalBusiness** `areaServed` com população real de cada cidade-bairro (sinaliza autoridade local pra Google)
5. **Tabela em /sobre:** "Onde atendemos: bairros e tempo de entrega real" (já feito) + adicionar coluna de população

---

## Sources
- [data.rio Censo 2022 - bairros](https://www.data.rio/items/fd354740f1934bf5bf8e9b0e2b509aa9)
- [IBGE Cidades Rio de Janeiro](https://cidades.ibge.gov.br/brasil/rj/rio-de-janeiro/panorama)
- [Cortex Intelligence - 15 bairros mais populosos](https://www.cortex-intelligence.com/blog/bairros-mais-populosos-do-brasil)
- [Portal Grande Tijuca - Censo Tijuca](https://grandetijuca.com.br/noticia/8019/tijuca-e-o-10%C2%BA-bairro-mais-populoso-do-brasil-segundo-censo-2022-do-ibge.html)
- [INMET - Normais Climatológicas 1991-2020](https://portal.inmet.gov.br/uploads/normais/NORMAISCLIMATOLOGICAS.pdf)
- [INMET Tabela Climática RJ (Wikipedia)](https://pt.wikipedia.org/wiki/Predefini%C3%A7%C3%A3o:Tabela_clim%C3%A1tica_do_Rio_de_Janeiro)
- [Riotur - Calendário oficial](https://riotur.prefeitura.rio/calendario-de-eventos/)
- [Festa Junina RJ 2026 - Blocos de Rua](https://www.blocosderua.com/rio-de-janeiro/noticias/festa-junina-rj-2026)
- [UERJ Calendário Acadêmico 2026](https://www.uerj.br/ensino/calendario-academico/)
- [Spazio Itanhangá Barra](https://spazioitanhanga.com.br/a-casa-de-festas/)
- [Festa Carioca Tijuca](https://www.festacarioca.com.br/salaodefestas)
