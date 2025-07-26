// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  
  // SEO and image optimization
  site: 'https://sandeepupadhyay.com',
  
  // Content collections are now built into Astro core, no need for a separate key
  // The schemas should be in your src/content/config.ts file
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});