import type { APIRoute } from 'astro';
import { getPaginasData, getModelosData } from '../lib/data-source';

const SITE = 'https://alugueltouromecanico.com.br';

function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const paginas = await getPaginasData();
  const modelos = await getModelosData();

  const urls: Array<{ loc: string; images: Array<{ src: string; alt: string }> }> = [];

  // Páginas geo (bairro × evento) — cada uma com hero
  for (const p of paginas) {
    urls.push({
      loc: `${SITE}/${p.slug_total}/`,
      images: [{ src: `${SITE}${p.imagem_hero}`, alt: p.imagem_hero_alt }],
    });
  }

  // Modelos
  for (const m of modelos) {
    urls.push({
      loc: `${SITE}/modelos/${m.slug}/`,
      images: [{ src: `${SITE}${m.foto_url}`, alt: `Touro mecânico ${m.nome} — ${m.descricao_curta}` }],
    });
  }

  const xmlUrls = urls
    .map(({ loc, images }) => {
      const imageBlocks = images
        .map(img => `    <image:image>
      <image:loc>${escape(img.src)}</image:loc>
      <image:caption>${escape(img.alt)}</image:caption>
    </image:image>`)
        .join('\n');
      return `  <url>
    <loc>${escape(loc)}</loc>
${imageBlocks}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemaps-image/1.1">
${xmlUrls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
