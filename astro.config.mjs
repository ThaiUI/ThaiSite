import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind()]
});