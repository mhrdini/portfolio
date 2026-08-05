import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resumeSection',
  title: 'Resume Section',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Personal Information', value: 'personal' },
          { title: 'Experience', value: 'experience' },
          { title: 'Education', value: 'education' },
          { title: 'Skills', value: 'skills' },
          { title: 'Custom', value: 'custom' },
        ],
      },
    }),

    defineField({
      name: 'containsSubsections',
      title: 'Contains subsection(s)',
      type: 'boolean',
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [
        { type: 'keyValueBlock' },
        { type: 'referenceBlock' },
      ],
      hidden: ({ parent }) => parent?.containsSubsections,
    }),

    defineField({
      name: 'subsections',
      type: 'array',
      of: [
        { type: 'resumeSection' },
      ],
      hidden: ({ parent }) => !(parent?.containsSubsections),
    }),

  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
