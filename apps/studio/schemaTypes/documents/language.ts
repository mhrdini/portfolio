import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',

  fields: [
    defineField({
      name: 'englishName',
      title: 'Language (in English)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'originalName',
      title: 'Language (in original language)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'string',
      options: {
        list: [
          { title: 'Native', value: 'native' },
          { title: 'Fluent', value: 'fluent' },
          { title: 'Professional', value: 'professional' },
          { title: 'Conversational', value: 'conversational' },
          { title: 'Basic', value: 'basic' },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: 'englishName',
      subtitle: 'proficiency',
    },
  },
})
