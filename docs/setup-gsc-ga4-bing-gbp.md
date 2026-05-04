# Setup pós-deploy — GSC + GA4 + Bing Webmaster + Google Business Profile

> Execução em ordem. Cada passo tem **estimativa de tempo** + **o que travar até resolver**.

## Pré-requisitos

- ✅ Site no ar (alugueltouromecanico.vercel.app)
- ⏳ Domínio próprio apontado (alugueltouromecanico.com.br) — recomendado **antes** de iniciar GSC pra economizar reverificação
- Conta Google (mesmo email que vai operar todos os 4 serviços)

---

## 1. Google Search Console (15 min)

**URL:** https://search.google.com/search-console

### Passos

1. "Adicionar propriedade" → escolher **Domínio** (não URL prefixo)
2. Inserir `alugueltouromecanico.com.br`
3. Google pede verificação via **DNS TXT record** — copiar o valor (algo tipo `google-site-verification=ABC...`)
4. Adicionar TXT no Registro.br: nome `@`, tipo TXT, valor copiado
5. Aguardar propagação (15min-2h) → clicar "Verificar"

### Após verificação

6. Sitemaps → Adicionar:
   - `https://alugueltouromecanico.com.br/sitemap-index.xml`
   - `https://alugueltouromecanico.com.br/sitemap-images.xml`
7. Cobertura → conferir indexação inicial após 48h
8. Configurações → Vincular ao GA4 (passo 2 abaixo)

### O que olhar nas primeiras 4 semanas

- **Indexação:** 100% das páginas indexadas em 14-21 dias é o esperado
- **Click-through rate:** atingir 2-5% nos primeiros 30 dias é bom sinal
- **Core Web Vitals:** dashboard "Experiência" → todas as URLs em "verde" (Astro static é otimizado por padrão)

---

## 2. Google Analytics 4 (10 min)

**URL:** https://analytics.google.com

### Passos

1. Admin → Criar Conta → "Aluguel Touro Mecânico"
2. Criar Propriedade → "Site Aluguel Touro Mecânico"
3. Plataforma "Web" → URL `https://alugueltouromecanico.com.br`
4. Copiar **Measurement ID** (formato `G-XXXXXXXXXX`)
5. Configurar Eventos personalizados:
   - `whatsapp_click` (clique no botão de WhatsApp — **conversão principal**)
   - `scroll_75` (engajamento profundo)

### Integração no site

Adicionar em `src/layouts/BaseLayout.astro` (faço isso quando tiver o Measurement ID):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

E no CTA WhatsApp (já existe, só envolver o link):

```html
<a href={url} onclick="gtag('event', 'whatsapp_click', { contexto: 'tijuca/festa-junina' })" ...>
```

### Dashboards a criar

- **Funil:** entrada → scroll 75% → click WhatsApp
- **Conversão por bairro:** desempenho de cada página geo
- **Tráfego orgânico × WhatsApp click:** taxa de conversão SEO real

---

## 3. Bing Webmaster Tools (5 min)

**URL:** https://www.bing.com/webmasters

### Passos

1. Login com Microsoft Account → "Adicionar site"
2. **Atalho:** "Importar do Google Search Console" (autoriza acesso, importa propriedades + sitemaps)
3. Confirmação por DNS TXT (igual GSC) ou meta tag

### Por quê

- Bing alimenta ChatGPT-Search, Copilot, Perplexity (Bing API), Yahoo
- Brasil usa Bing menos, mas IA cita Bing primeiro

### Sitemaps

- `https://alugueltouromecanico.com.br/sitemap-index.xml`
- `https://alugueltouromecanico.com.br/sitemap-images.xml`

---

## 4. Google Business Profile / GMN (30 min — exige verificação)

**URL:** https://business.google.com

### Passos

1. "Adicionar empresa" → Nome: **Aluguel Touro Mecânico**
2. Categoria principal: **"Serviço de aluguel de equipamentos para festas"**
3. Categoria secundária: **"Serviço de aluguel de brinquedos infláveis"**
4. Localização: **"Eu atendo clientes em sua localização"** (área de serviço; **NÃO** "tenho endereço aberto ao público")
5. Área de serviço: marcar bairros do Rio
   - Tijuca, Vila Isabel, Maracanã, Méier, Cachambi, Engenho de Dentro, Piedade
   - Botafogo, Flamengo, Humaitá, Copacabana, Leme, Ipanema, Leblon
   - Barra da Tijuca, Recreio, Jacarepaguá, Itanhangá, Vargem
   - Madureira, Cascadura, Oswaldo Cruz, Campinho
6. **Telefone:** +55 21 97154-2005
7. **Site:** https://alugueltouromecanico.com.br

### Verificação

- Sem CNPJ + sem endereço físico → Google geralmente pede **verificação por vídeo** (gravar 1min mostrando o equipamento + algum ponto de referência)
- Se exigir cartão postal: redirecionar pra endereço pessoal/depósito
- Esperar 5-14 dias para verificação completa

### Após verificação

- **Postar 3-5 fotos** (touro montado, festa, equipe — qualquer ângulo serve por enquanto)
- **Habilitar mensagens** (chat direto integrado ao perfil)
- **Configurar horário de atendimento**: seg-sex 9h-19h, sáb 9h-14h
- **Pedir 5 avaliações iniciais** (clientes próximos que conhecem o serviço — mesmo da operação VR Festas/Aluguel de Sonhos pode pedir review na nova persona)
- **Postar atualização semanal** ("Festa junina 2026", "Disponível pra formatura dezembro")

---

## 5. Cross-link entre os 4 serviços

Depois que os 4 estiverem verificados:

1. **GA4 → GSC:** Admin GA4 → "Vinculações com Search Console" → vincular a propriedade
2. **GBP → GA4:** Painel GBP → Configurações → "Adicionar Google Analytics" → cole o Measurement ID
3. **Bing Webmaster:** importar do GSC (já feito no passo 3)

---

## Pós-setup — checklist semanal (5 min/semana)

- [ ] GSC: novas páginas indexadas? Erros de cobertura?
- [ ] GSC: queries com posição 8-15 (oportunidades de melhoria — passa pra optimize-page skill)
- [ ] GA4: cliques no WhatsApp da semana
- [ ] GBP: avaliações novas (responder em 24h)
- [ ] GBP: views, calls, requests de direção (proxy de demanda)

---

## O que envia pra mim quando tiver

1. **Measurement ID do GA4** (formato `G-XXXXXXXXXX`) → eu integro no `BaseLayout`
2. **Confirmação de GSC ativo** → eu submeto sitemaps via API se quiser automação
3. **Link do perfil GBP** → eu adiciono `sameAs` no schema LocalBusiness pra reforçar entidade
