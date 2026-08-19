import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'institution',
      title: 'Institution Name',
      type: 'string',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'localizedString',
    }),
    defineField({
      name: 'major',
      title: 'Major',
      type: 'localizedString',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'localizedText' }],
    }),
  ],

  preview: {
    select: {
      title: 'degree.en',
      subtitle: 'institution',
    },
  },
})
