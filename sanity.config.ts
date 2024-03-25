import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from '@/sanity/schemaTypes'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID!
const dataset = import.meta.env.PUBLIC_SANITY_DATASET!

// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_PROJECT_ID=${projectId}\nPUBLIC_SANITY_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2,
    )}`,
  )
}

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
