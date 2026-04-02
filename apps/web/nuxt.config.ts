import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ['./app/assets/css/styles.css'],
  build: {
    transpile: [
      '@portfolio/ui-vue',
    ],
  },

  vite: {
    base: '',
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'fontsource' },
      { name: 'JetBrains Mono', provider: 'fontsource' },
      { name: 'Noto Sans Japanese', provider: 'google' },
    ],
  },
})
