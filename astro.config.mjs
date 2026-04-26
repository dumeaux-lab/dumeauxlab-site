// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Public site URL — required for sitemap to emit absolute canonical URLs.
  site: 'https://lab-dumeaux.science',
  integrations: [react(), sitemap()],
});