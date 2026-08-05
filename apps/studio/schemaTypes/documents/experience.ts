import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'localizedString',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
  ],
  preview: {
    select: {
      title: 'position.en',
      subtitle: 'company',
    },
  },
})
