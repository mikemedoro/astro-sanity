// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import sanity from 'astro-sanity';

import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  site: 'https://sitename.dev/',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    prefetch(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION,
      useCdn: false,
    }),
  ],
});
