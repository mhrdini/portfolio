import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',

  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
    }),

    defineField({
      name: 'ja',
      title: 'Japanese',
      type: 'text',
    }),
  ],

})
