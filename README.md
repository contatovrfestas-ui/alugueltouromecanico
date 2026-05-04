# alugueltouromecanico.com.br

Site programmatic SEO (pSEO) pra aluguel de touro mecânico no Rio de Janeiro.

## Stack
- **Astro 6** (static output, deploy Vercel)
- **Tailwind CSS** (paleta rodeio: #B5231D, #5C3A21, #F5E6D3, #D9A441)
- **Google Sheets** como ERP de páginas, bairros, eventos, modelos, espaços
- **Sharp** pra composição de imagens
- **Schema.org JSON-LD**: LocalBusiness + FAQPage + Service + BreadcrumbList

## Estrutura

```
src/
├── pages/                      # Rotas (estáticas + dinâmicas via getStaticPaths)
├── lib/                        # Cliente Sheets, schemas TS, integrações IBGE/INMET/Places
├── layouts/                    # BaseLayout, PaginaGeo, PostBlog
├── components/                 # Header, Footer, FAQ, TabelaModelos, etc.
├── content/blog/               # Posts informacionais markdown
└── styles/                     # Tailwind + global.css

scripts/                        # Coleta de dados públicos + composição de imagens
data/                           # Cache local de coletas
public/images/                  # logo, modelos, bairros, og
```

## Persona separada

Site é uma marca-persona distinta. Não cita nem cruza com outras marcas. CNPJ, WhatsApp, endereço, GA4, GSC e Vercel project são separados.

## Comandos

```bash
npm run dev                     # http://localhost:4321
npm run build
npm run preview

npm run sync:ibge               # coleta dados IBGE → data/
npm run sync:inmet              # coleta climatologia INMET
npm run sync:places             # coleta salões via Places
npm run sync:riotur             # coleta agenda Riotur

npm run compor:imagens          # pipeline Sharp
npm run audit:pseo              # pseolint contra dev local
```

## Fontes públicas usadas
- IBGE Censo 2022 (sidra.ibge.gov.br)
- INMET Normais Climatológicas 1991-2020
- Google Places API + Distance Matrix
- Riotur — agenda oficial
- Lei Municipal RJ 126/77 + 3.268/01
- ABNT NBR 16.071:2012 (brinquedos infláveis)
