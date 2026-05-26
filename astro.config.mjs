// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Public site URL — required for sitemap to emit absolute canonical URLs.
  site: 'https://lab-dumeaux.science',
  // Enforce trailing-slash URLs everywhere so internal links match the canonical
  // form Google sees in the sitemap and <link rel="canonical">. Prevents the
  // "Duplicate, Google chose different canonical than user" issue caused by
  // /papers/foo (links) vs /papers/foo/ (canonical) mismatches.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [react(), sitemap()],
});