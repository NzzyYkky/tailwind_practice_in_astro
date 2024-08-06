import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  site: 'https://NzzyYkky.github.io',
  // base: '/tailwind_practice_in_astro',
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
  vite: {
    plugins: [
      visualizer({ filename: 'bundle-analysis.html', open: true, }),
    ],
  },
});
