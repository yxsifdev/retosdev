// @ts-check
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL,
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [auth(), mdx()],
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});
