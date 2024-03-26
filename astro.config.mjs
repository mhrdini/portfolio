import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'
import sanity from '@sanity/astro'

import { loadEnv } from 'vite'

const {
        PUBLIC_SANITY_PROJECT_ID,
        PUBLIC_SANITY_DATASET,
      } = loadEnv(import.meta.env.MODE, process.cwd(), '')

const projectId = PUBLIC_SANITY_PROJECT_ID
const dataset = PUBLIC_SANITY_DATASET

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), sanity({
    projectId,
    dataset,
    studioBasePath: '/admin',
    useCdn: false,
    apiVersion: '2024-03-24',
  }), react()],
  output: 'hybrid',
  adapter: cloudflare(),
})