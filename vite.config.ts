import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // se lo stai usando per l'alias "@/"
import fs from "node:fs";
import path from "node:path";

// Importiamo direttamente i dati dei blog post
import { blogPosts } from "./src/data/blogPosts";

function generateSitemap() {
  return {
    name: 'generate-sitemap',
    buildStart() {
      const baseUrl = 'https://alessandroguelpa.it';
      
      const today = new Date().toISOString().split('T')[0];

      // 1. Definisci le tue rotte statiche principali
      const staticPages = [
        { path: '', priority: '1.0' },
        { path: '/about', priority: '0.8' },
        { path: '/project', priority: '0.8' },
        { path: '/sports', priority: '0.8' },
        { path: '/blog', priority: '0.8' },
        { path: '/contact', priority: '0.5' },
      ];

      const staticUrls = staticPages.map(page => `  <url>\n    <loc>${baseUrl}${page.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`).join('\n');

      // 2. Genera dinamicamente le rotte per ogni post del blog
      // Usiamo 'any' per evitare errori di compilazione TS nel file di config
      const dynamicUrls = blogPosts.map((post: any) => `  <url>\n    <loc>${baseUrl}/blog/${post.id}</loc>\n    <lastmod>${post.date}</lastmod>\n    <priority>0.6</priority>\n  </url>`).join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticUrls}\n${dynamicUrls}\n</urlset>`;

      // 3. Scrive il file sitemap.xml direttamente nella cartella public
      const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemap);
      
      console.log('✅ Sitemap.xml generata dinamicamente con i Blog Post!');
    }
  };
}

export default defineConfig({
  // Aggiungiamo il plugin custom
  plugins: [react(), tsconfigPaths(), generateSitemap()],
  build: {
    rollupOptions: {
      output: {
        // Dividiamo le librerie pesanti in file separati
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three")) {
              return "vendor-three";
            }
            if (id.includes("@monaco-editor")) {
              return "vendor-editor";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer-motion";
            }
            if (id.includes("@heroui") || id.includes("@react-aria")) {
              return "vendor-ui";
            }
          }
        },
      },
    },
  },
});
