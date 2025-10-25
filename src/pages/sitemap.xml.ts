import type { APIRoute } from 'astro';

const languages = ['en', 'ru', 'de', 'fr', 'tr', 'es', 'pt', 'pl', 'it', 'fi', 'sv', 'nb', 'ar', 'id', 'ja', 'zh', 'hi'];
const pages = ['', 'guide', 'rules', 'allies', 'contact', 'report'];

export const GET: APIRoute = () => {
  const siteUrl = 'https://supremacy1914.dev';
  const currentDate = new Date().toISOString();

  const urlEntries = [];

  // Add English (default) pages
  pages.forEach(page => {
    const url = page ? `${siteUrl}/${page}` : siteUrl;
    const priority = page === '' ? '1.0' : '0.8';
    urlEntries.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`);
  });

  // Add language-specific pages
  languages.forEach(lang => {
    if (lang === 'en') return; // Skip English as it's already added as default

    pages.forEach(page => {
      const url = page ? `${siteUrl}/${lang}/${page}` : `${siteUrl}/${lang}`;
      const priority = page === '' ? '0.9' : '0.7';
      urlEntries.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>
  </url>`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
