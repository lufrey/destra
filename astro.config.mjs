import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import vercelStatic from '@astrojs/vercel/static';

export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  adapter: vercelStatic({
    analytics: true
  }),
});