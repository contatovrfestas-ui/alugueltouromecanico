// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alugueltouromecanico.com.br',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: false,
  }),
  integrations: [
    sitemap({
      // Filtra páginas não-indexáveis do sitemap principal
      filter: (page) => {
        // Páginas privadas/admin
        if (page.includes('/admin')) return false;
        if (page.includes('/preview')) return false;
        // 404 não entra no sitemap
        if (page.includes('/404')) return false;
        return true;
      },
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      // Customiza prioridade por tipo de página
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        // Home
        if (path === '/') item.priority = 1.0;
        // Pillar e sobre
        else if (path === '/aluguel-touro-mecanico/' || path === '/sobre/') item.priority = 0.9;
        // Modelos
        else if (path.startsWith('/modelos/')) item.priority = 0.8;
        // Páginas geo bairro × evento (.../[evento]/)
        else if (path.split('/').filter(Boolean).length === 2) item.priority = 0.85;
        // Bairro index
        else if (path.split('/').filter(Boolean).length === 1) item.priority = 0.7;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
});
