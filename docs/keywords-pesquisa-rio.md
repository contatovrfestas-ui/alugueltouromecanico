# Pesquisa de keywords — touro mecânico Rio (Maio/2026)

> Coleta inicial via SERP + concorrentes diretos. Volume não medido (sem Ahrefs/Semrush). Dados de demanda inferidos da extensão da SERP, anúncios pagos visíveis e densidade de concorrentes em cada query.

---

## Bucket 1 — Money keywords (alta intenção comercial)

| Keyword | Intenção | Concorrência | Nossa página | Prioridade |
|---|---|---|---|---|
| aluguel touro mecânico rio de janeiro | comercial | alta (5+ players + Olx/ML) | `/aluguel-touro-mecanico` (pillar) | P0 — já existe |
| aluguel touro mecânico rj | comercial | alta | pillar | P0 — já existe |
| touro mecânico aluguel rj | comercial | alta | pillar | P0 — já existe |
| locação de touro mecânico rio de janeiro | comercial | média | pillar (sinônimo no H2) | P0 — adicionar H2 com sinônimo |
| aluguel de touro mecânico para festas rj | comercial | média | pillar | P0 — adicionar H2 |
| touro mecânico para alugar no rio | comercial | baixa | pillar | P1 — variação natural |
| empresa de aluguel de touro mecânico rj | comercial | baixa | pillar | P1 |

## Bucket 2 — Geo (bairro × evento) — onde a estratégia pSEO ataca

Confirmado: **só `touromecanicoaluguelrj.com.br` cobre geo de forma ampla** (zonas + bairros isolados em headings, mas sem páginas dedicadas por bairro). FLAU/Baby Heróis/VR Festas/Aluguel de Sonhos não têm matriz geo. Janela aberta.

### Bairros prioritários (já no `data-base.ts`)

| Bairro | Rationale | Volume estimado |
|---|---|---|
| tijuca | classe média grande + tradição festa junina | médio-alto |
| barra-da-tijuca | poder aquisitivo + festas grandes (formaturas/casamentos) | alto |
| copacabana | turismo + eventos corporativos | médio |
| botafogo | jovem profissional + eventos corporativos | médio |
| recreio | condomínios fechados (festa em condomínio) | médio |
| jacarepagua | classe média alta crescendo | médio |
| vila-isabel | tradicional + universidade | baixo-médio |
| ipanema | alto poder aquisitivo + eventos VIP | baixo (volume) / alto (ticket) |
| meier | densidade populacional alta | médio |
| madureira | tradição samba/festa | médio |

### Eventos prioritários (já no `data-base.ts`)

| Evento | Sazonalidade | Concorrência específica |
|---|---|---|
| festa-junina | jun (pico) | só `touromecanicoaluguelrj.com.br` tem página |
| formatura | nov-dez (pico) + jul (escolas) | nenhum concorrente com página dedicada |
| aniversario-infantil | ano todo | mais difuso (concorre com locação de brinquedo geral) |
| casamento | ano todo (pico mar-set) | nenhum concorrente |
| evento-corporativo | ano todo | nenhum concorrente |
| festa-julina | jul | derivado da festa junina, baixo |

### Padrão de URL geo

`/{bairro}/{evento}` — já implementado.

Exemplo de keywords longtail capturadas:
- "aluguel touro mecânico tijuca festa junina"
- "touro mecânico barra da tijuca formatura"
- "alugar touro mecânico copacabana evento corporativo"
- "touro mecânico recreio aniversário"

## Bucket 3 — Informacionais (blog) — TOFU

Já cobertos pelos 5 posts iniciais:
- `quanto-custa-touro-mecanico-rio.md` — pega "quanto custa", "valor", "preço médio"
- `como-organizar-arraia-privado-rio.md` — pega "como organizar arraial"
- `touro-mecanico-cabe-no-salao-do-predio.md` — pega "tamanho", "cabe", "espaço necessário"
- `seguranca-touro-mecanico-norma-nbr-16071.md` — pega "é seguro", "norma técnica"
- `formatura-rio-de-janeiro-touro-mecanico.md` — geo+evento dedicado

### Gaps de blog (próxima leva)

| Keyword | Ângulo único | Prioridade |
|---|---|---|
| touro mecânico criança pode | restrição de idade INMETRO + casos por faixa | P1 |
| touro mecânico voltagem 220 ou 110 | técnico — pega busca de organizador profissional | P1 |
| touro mecânico aluguel barato rj | comparativo honesto sobre o que "barato" significa | P2 |
| touro mecânico no shopping pode | regulamentação shopping + casos práticos | P2 |
| touro mecânico bafômetro adulto regra | regra interna do operador + caso em formatura | P2 |
| touro mecânico chuva o que acontece | logística contingência + cláusula contrato | P2 |
| touro mecânico evento corporativo team building | dossiê com cases + RH | P3 |
| seguro de RC touro mecânico aluguel | técnico legal + direito do consumidor | P3 |

## Bucket 4 — Modelos / produto (`/modelos/[modelo]`)

| Modelo | Keyword | Página |
|---|---|---|
| infantil | "touro mecânico infantil aluguel rj" | `/modelos/infantil` |
| profissional | "touro mecânico profissional 220v aluguel" | `/modelos/profissional` |
| gigante | "touro mecânico gigante adulto aluguel" | `/modelos/gigante` |

Concorrente FLAU usa "linha profissional, 220v, monofásico, eletrônico" como diferencial — confirma que existe demanda de busca técnica.

## Bucket 5 — Sinônimos e variações (NLP — usar no body, não em title)

- "rodeio mecânico" (variação regional, baixíssimo volume mas zero competição)
- "boi mecânico" (variação cearense/nordestina — usar em festa junina)
- "touro inflável" (Magic Fest usa — atende busca de quem confunde)
- "boi bravo aluguel"
- "rodeio festa" (geral)

---

## Prioridades pra próximas 4 semanas

1. **P0 (semana 1):** revisar pillar pra incluir sinônimos "locação", "para festas" em H2
2. **P0 (semana 1):** criar página geo `barra-da-tijuca/formatura` (maior intersecção volume × ticket × concorrência fraca)
3. **P1 (semana 2):** publicar 2 posts dos gaps (criança pode + voltagem)
4. **P1 (semana 3):** completar páginas de modelo com seção técnica (a FLAU usa, vamos cobrir igual)
5. **P2 (semana 4):** longtail "barato" + "chuva" pra capturar long-tail orgânico

---

## Observações sobre o mercado RJ

- **Faixa de preço de mercado declarada:** R$ 900 a R$ 2.000 (até 4h) — `vrfestas.com.br/blog`, busca SERP
- **Pacote padrão:** touro + colchão + montagem + operador (todos os concorrentes oferecem)
- **Diferencial possível:** **NBR 16.071** explícita no marketing (só nós citamos hoje)
- **Diferencial possível:** seguro de RC explícito (só nós citamos no `/sobre`)
- **Diferencial possível:** matriz geo real (concorrentes listam bairros em texto, não têm página)

## Sources
- [touromecanicoaluguelrj.com.br](https://touromecanicoaluguelrj.com.br/)
- [touromecanicoaluguelrj — preço](https://touromecanicoaluguelrj.com.br/touro-mecanico-festa-rj-preco-valor)
- [touromecanicoaluguelrj — festa junina](https://touromecanicoaluguelrj.com.br/festa-junina-aluguel-touro)
- [flaubrinquedos.com](https://www.flaubrinquedos.com/touro-mecanico)
- [babyherois.com.br](https://babyherois.com.br/produto/touro-mecanico-rodeio/)
- [vrfestas.com.br/blog/touro-mecanico-aluguel-precos-e-orcamentos](https://vrfestas.com.br/blog/touro-mecanico-aluguel-precos-e-orcamentos/)
- [alugueldesonhos.com.br/aluguel-brinquedos/touro-mecanico](https://alugueldesonhos.com.br/aluguel-brinquedos/touro-mecanico/)
