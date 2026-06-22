import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', 'motion-v/nuxt', '@vueuse/nuxt'],
  css: ['./app/assets/css/styles.css'],
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
      { name: 'IBM Plex Sans', provider: 'google', weights: ['100 700'] },
      { name: 'JetBrains Mono', provider: 'fontsource', weights: ['100 800'] },
      { name: 'Noto Sans Japanese', provider: 'google', weights: ['100 900'] },
      { name: 'Zen Kaku Gothic New', provider: 'google', weights: ['300', '400', '500', '700', '900'] },
    ],
  },
})
