import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de', 'fr', 'tr', 'es', 'pt', 'pl', 'it', 'fi', 'sv', 'nb', 'ar', 'id', 'ja', 'zh', 'hi'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});