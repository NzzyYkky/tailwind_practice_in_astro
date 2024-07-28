import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
          extend: {},
        },
        plugins: ["prettier-plugin-tailwindcss"],
        tailwindFunctions: ['tv'], // ここに追加
      },
    }),
  ],
});