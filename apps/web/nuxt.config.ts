import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'motion-v/nuxt',
    'lenis/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@nuxt/image',
  ],
  css: [
    './app/assets/css/styles.css',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    base: '',
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@lucide/vue',
      ],
    },
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: ['100 900'] },
      { name: 'Geist', provider: 'google', weights: ['100 900'] },
      { name: 'IBM Plex Sans', provider: 'google', weights: ['100 700'] },
      { name: 'JetBrains Mono', provider: 'fontsource', weights: ['100 800'] },
      { name: 'Noto Sans Japanese', provider: 'google', weights: ['100 900'] },
      { name: 'Zen Kaku Gothic New', provider: 'google', weights: ['300', '400', '500', '700', '900'] },
      { name: 'Shippori Mincho B1', provider: 'google', weights: ['400'] },
    ],
  },
  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
    typegen: {
      enabled: true,
      schemaTypesPath: '../studio/schemaTypes',
    },
    visualEditing: {
      studioUrl: process.env.NUXT_PUBLIC_SANITY_STUDIO_URL,
      stega: true,
      zIndex: 51,
    },
  },
})