import { defineType } from 'sanity'

export default defineType({
  name: 'referenceBlock',
  title: 'Reference Block',
  type: 'reference',
  to: [
    { type: 'social' },
    { type: 'experience' },
    { type: 'education' },
    { type: 'language' },
  ],
})
