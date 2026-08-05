import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'keyValueBlock',
  title: 'Key-Value Block',
  type: 'object',

  fields: [
    defineField({
      name: 'valueType',
      title: 'Value Type',
      type: 'string',
      options: {
        list: [
          { title: 'String', value: 'string' },
          { title: 'Text', value: 'text' },
          { title: 'URL', value: 'url' },
          { title: 'Email', value: 'email' },
          { title: 'Image', value: 'image' },
          { title: 'Date', value: 'date' },
        ],
      },
      initialValue: 'string',
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      hidden: ({ parent }) => parent?.valueType !== 'text',
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({ parent }) => parent?.valueType !== 'url',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      hidden: ({ parent }) => parent?.valueType !== 'email',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent }) => parent?.valueType !== 'image',
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      hidden: ({ parent }) => parent?.valueType !== 'date',
    }),

  ],
})
