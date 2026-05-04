/**
 * Pipeline de geração de placeholders de imagem com Sharp.
 *
 * Gera WebP para:
 *  1. /images/bairros/{bairro}-{evento}.webp  (1600x900) — hero das 30 páginas geo
 *  2. /images/modelos/touro-{slug}.webp        (1200x800) — 3 modelos
 *  3. /images/og/default.jpg                   (1200x630) — OG default
 *  4. /images/blog/{slug}.webp                 (1200x630) — 5 posts
 *
 * Sem foto real ainda — usa composição SVG → WebP/JPG com a paleta rodeio,
 * logo + texto sobreposto + textura sutil. Quando tiver foto, basta substituir
 * os arquivos físicos (mesma URL).
 *
 * Rodar: npm run compor:imagens
 */

import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'images');

// Paleta — replicada de src/styles/global.css
const COLOR = {
  terra: '#B5231D',
  terraDark: '#8C1B17',
  couro: '#5C3A21',
  couroDark: '#3E2715',
  creme: '#F5E6D3',
  cremeDark: '#E8D2B3',
  dourado: '#D9A441',
  preto: '#1A1A1A',
};

// Bairros e eventos — replicados de data-base.ts
// (importar TS do Node sem build daria refresh automático mas exigiria tsx; mantemos a duplicação curta aqui)
const BAIRROS = [
  { slug: 'tijuca', nome: 'Tijuca' },
  { slug: 'barra-da-tijuca', nome: 'Barra da Tijuca' },
  { slug: 'copacabana', nome: 'Copacabana' },
  { slug: 'botafogo', nome: 'Botafogo' },
  { slug: 'recreio', nome: 'Recreio' },
  { slug: 'jacarepagua', nome: 'Jacarepaguá' },
  { slug: 'vila-isabel', nome: 'Vila Isabel' },
  { slug: 'ipanema', nome: 'Ipanema' },
  { slug: 'meier', nome: 'Méier' },
  { slug: 'madureira', nome: 'Madureira' },
];

const EVENTOS = [
  { slug: 'festa-junina', nome: 'Festa Junina' },
  { slug: 'formatura', nome: 'Formatura' },
  { slug: 'aniversario-infantil', nome: 'Aniversário Infantil' },
];

const MODELOS = [
  { slug: 'infantil', nome: 'Infantil', sub: '3m × 3m · 6+ anos · até 60kg' },
  { slug: 'profissional', nome: 'Profissional', sub: '5m × 5m · 14+ anos · até 120kg' },
  { slug: 'gigante', nome: 'Gigante', sub: '6m × 6m · 14+ anos · até 150kg' },
];

const POSTS = [
  { slug: 'quanto-custa-touro-mecanico-rio', titulo: 'Quanto custa', sub: 'Guia de preços 2026' },
  { slug: 'como-organizar-arraia-privado-rio', titulo: 'Arraiá privado', sub: 'Checklist completo' },
  { slug: 'touro-mecanico-cabe-no-salao-do-predio', titulo: 'Cabe no salão?', sub: 'Medidas por bairro' },
  { slug: 'seguranca-touro-mecanico-norma-nbr-16071', titulo: 'Segurança NBR 16.071', sub: 'O que exigir' },
  { slug: 'formatura-rio-de-janeiro-touro-mecanico', titulo: 'Formatura no Rio', sub: 'Como contratar' },
  { slug: 'evento-corporativo-touro-mecanico-rio', titulo: 'Evento corporativo', sub: 'B2B no Rio' },
  { slug: 'preco-touro-mecanico', titulo: 'Touro mecânico', sub: 'Preço no Rio' },
  { slug: 'arraia-privado-checklist', titulo: 'Arraiá privado', sub: 'Checklist' },
  { slug: 'touro-cabe-no-salao', titulo: 'Cabe no salão?', sub: 'Medidas' },
  { slug: 'seguranca-norma-nbr-16071', titulo: 'NBR 16.071', sub: 'Segurança' },
  { slug: 'formatura-touro-mecanico', titulo: 'Formatura', sub: 'Como contratar' },
  { slug: 'evento-corporativo-touro', titulo: 'Corporativo', sub: 'B2B' },
];

function ensureDir(p) { if (!existsSync(p)) mkdirSync(p, { recursive: true }); }

/**
 * Gera SVG de hero geo (1600x900).
 * Composição:
 * - Fundo gradient terra → couro (efeito "couro envelhecido")
 * - Padrão de pontos sutis (textura)
 * - Faixa dourada vertical à esquerda
 * - Marca: "Aluguel Touro Mecânico" no topo
 * - Título do evento + bairro centralizado
 * - Linha decorativa
 * - Subtítulo: "Rio de Janeiro"
 */
function svgHeroGeo({ bairro, evento, w = 1600, h = 900 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLOR.terra}"/>
      <stop offset="60%" stop-color="${COLOR.terraDark}"/>
      <stop offset="100%" stop-color="${COLOR.couroDark}"/>
    </linearGradient>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1.5" fill="${COLOR.couro}" opacity="0.18"/>
    </pattern>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#dots)"/>

  <!-- Faixa dourada lateral -->
  <rect x="0" y="0" width="24" height="${h}" fill="${COLOR.dourado}"/>
  <rect x="${w - 24}" y="0" width="24" height="${h}" fill="${COLOR.dourado}"/>

  <!-- Marca topo -->
  <text x="${w / 2}" y="120" text-anchor="middle"
        font-family="Georgia, serif" font-size="32" font-weight="700"
        fill="${COLOR.creme}" letter-spacing="3">
    ALUGUEL TOURO MECÂNICO
  </text>
  <line x1="${w / 2 - 100}" y1="155" x2="${w / 2 + 100}" y2="155"
        stroke="${COLOR.dourado}" stroke-width="3"/>

  <!-- Evento -->
  <text x="${w / 2}" y="${h / 2 - 30}" text-anchor="middle"
        font-family="Georgia, serif" font-size="92" font-weight="700"
        fill="${COLOR.creme}">
    ${escapeXml(evento)}
  </text>

  <!-- Bairro -->
  <text x="${w / 2}" y="${h / 2 + 80}" text-anchor="middle"
        font-family="Georgia, serif" font-size="60" font-weight="500"
        fill="${COLOR.dourado}" font-style="italic">
    ${escapeXml(bairro)}
  </text>

  <!-- Linha decorativa -->
  <line x1="${w / 2 - 200}" y1="${h / 2 + 130}" x2="${w / 2 + 200}" y2="${h / 2 + 130}"
        stroke="${COLOR.dourado}" stroke-width="2"/>

  <!-- Cidade -->
  <text x="${w / 2}" y="${h - 80}" text-anchor="middle"
        font-family="Georgia, serif" font-size="28" font-weight="500"
        fill="${COLOR.cremeDark}" letter-spacing="6">
    RIO DE JANEIRO
  </text>
</svg>`;
}

function svgModeloHero({ nome, sub, w = 1200, h = 800 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${COLOR.couro}"/>
      <stop offset="100%" stop-color="${COLOR.couroDark}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg2)"/>
  <rect x="0" y="0" width="${w}" height="${h}" fill="${COLOR.terra}" opacity="0.1"/>

  <!-- Selo lateral -->
  <circle cx="${w - 120}" cy="120" r="60" fill="${COLOR.dourado}" opacity="0.9"/>
  <text x="${w - 120}" y="115" text-anchor="middle"
        font-family="Georgia, serif" font-size="14" font-weight="700"
        fill="${COLOR.couroDark}">MODELO</text>
  <text x="${w - 120}" y="135" text-anchor="middle"
        font-family="Georgia, serif" font-size="10" font-weight="500"
        fill="${COLOR.couroDark}" letter-spacing="2">PROFISSIONAL</text>

  <!-- Marca -->
  <text x="80" y="100" font-family="Georgia, serif" font-size="22" font-weight="700"
        fill="${COLOR.creme}" letter-spacing="3">
    ALUGUEL TOURO MECÂNICO
  </text>

  <!-- Nome do modelo -->
  <text x="80" y="${h / 2 + 20}" font-family="Georgia, serif"
        font-size="120" font-weight="700" fill="${COLOR.creme}">
    ${escapeXml(nome)}
  </text>

  <!-- Sub -->
  <text x="80" y="${h / 2 + 80}" font-family="Georgia, serif"
        font-size="32" font-weight="400" fill="${COLOR.dourado}">
    ${escapeXml(sub)}
  </text>

  <!-- Linha base -->
  <rect x="80" y="${h - 80}" width="200" height="4" fill="${COLOR.dourado}"/>
  <text x="80" y="${h - 40}" font-family="Georgia, serif"
        font-size="20" fill="${COLOR.creme}" letter-spacing="3">
    Rio de Janeiro · Capital
  </text>
</svg>`;
}

function svgOgDefault({ w = 1200, h = 630 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bgOg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLOR.terra}"/>
      <stop offset="100%" stop-color="${COLOR.couroDark}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bgOg)"/>
  <rect x="0" y="0" width="${w}" height="12" fill="${COLOR.dourado}"/>
  <rect x="0" y="${h - 12}" width="${w}" height="12" fill="${COLOR.dourado}"/>

  <text x="${w / 2}" y="${h / 2 - 60}" text-anchor="middle"
        font-family="Georgia, serif" font-size="76" font-weight="700"
        fill="${COLOR.creme}">
    Aluguel Touro Mecânico
  </text>
  <text x="${w / 2}" y="${h / 2 + 20}" text-anchor="middle"
        font-family="Georgia, serif" font-size="40" font-weight="400"
        fill="${COLOR.dourado}" font-style="italic">
    Rio de Janeiro
  </text>
  <text x="${w / 2}" y="${h / 2 + 90}" text-anchor="middle"
        font-family="Georgia, serif" font-size="22" font-weight="500"
        fill="${COLOR.cremeDark}" letter-spacing="3">
    LAUDO ABNT NBR 16.071 · SEGURO RC · OPERADOR
  </text>
</svg>`;
}

function svgBlogHero({ titulo, sub, w = 1200, h = 630 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bgBlog" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLOR.couro}"/>
      <stop offset="100%" stop-color="${COLOR.terraDark}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bgBlog)"/>

  <text x="80" y="100" font-family="Georgia, serif" font-size="20" font-weight="700"
        fill="${COLOR.dourado}" letter-spacing="4">
    ALUGUEL TOURO MECÂNICO · BLOG
  </text>

  <text x="80" y="${h / 2 + 20}" font-family="Georgia, serif"
        font-size="78" font-weight="700" fill="${COLOR.creme}">
    ${escapeXml(titulo)}
  </text>
  <text x="80" y="${h / 2 + 80}" font-family="Georgia, serif"
        font-size="34" font-weight="400" fill="${COLOR.dourado}" font-style="italic">
    ${escapeXml(sub)}
  </text>

  <rect x="80" y="${h - 60}" width="180" height="3" fill="${COLOR.dourado}"/>
</svg>`;
}

function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  }[c]));
}

async function svgToWebp(svg, outPath, { quality = 82 } = {}) {
  await sharp(Buffer.from(svg)).webp({ quality }).toFile(outPath);
}

async function svgToJpg(svg, outPath, { quality = 85 } = {}) {
  await sharp(Buffer.from(svg)).jpeg({ quality, progressive: true }).toFile(outPath);
}

// ===== Main =====
async function main() {
  console.log('Gerando placeholders de imagens...\n');

  const dirBairros = join(OUT_DIR, 'bairros');
  const dirModelos = join(OUT_DIR, 'modelos');
  const dirOg = join(OUT_DIR, 'og');
  const dirBlog = join(OUT_DIR, 'blog');
  ensureDir(dirBairros);
  ensureDir(dirModelos);
  ensureDir(dirOg);
  ensureDir(dirBlog);

  // 1. Bairros × Eventos (30 placeholders)
  let geoCount = 0;
  for (const b of BAIRROS) {
    for (const e of EVENTOS) {
      const out = join(dirBairros, `${b.slug}-${e.slug}.webp`);
      const svg = svgHeroGeo({ bairro: b.nome, evento: e.nome });
      await svgToWebp(svg, out);
      geoCount++;
    }
  }
  console.log(`✓ ${geoCount} placeholders de bairro × evento → public/images/bairros/`);

  // 2. Modelos (3 placeholders)
  for (const m of MODELOS) {
    const out = join(dirModelos, `touro-${m.slug}.webp`);
    const svg = svgModeloHero({ nome: m.nome, sub: m.sub });
    await svgToWebp(svg, out);
  }
  console.log(`✓ ${MODELOS.length} placeholders de modelo → public/images/modelos/`);

  // 3. OG default (1 imagem JPG)
  const ogOut = join(dirOg, 'default.jpg');
  await svgToJpg(svgOgDefault({}), ogOut);
  console.log(`✓ 1 OG default → public/images/og/default.jpg`);

  // 4. Blog (12 — incluindo aliases)
  for (const p of POSTS) {
    const out = join(dirBlog, `${p.slug}.webp`);
    const svg = svgBlogHero({ titulo: p.titulo, sub: p.sub });
    await svgToWebp(svg, out);
  }
  console.log(`✓ ${POSTS.length} placeholders de blog → public/images/blog/`);

  console.log(`\nTotal: ${geoCount + MODELOS.length + 1 + POSTS.length} imagens geradas.`);
  console.log('Quando tiver foto real, substitua os arquivos .webp/.jpg mantendo o mesmo path.');
}

main().catch(err => {
  console.error('Erro:', err);
  process.exit(1);
});
