import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  buildOptions: {
    site: 'https://tirops-angels.netlify.app/',
    sitemap: true
  },
});