import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Japanese', value: 'ja' },
        ],
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'resumeSection' }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
    },
  },
})
