import { defineField, defineType } from 'sanity'

const EMAIL_REGEX = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
const URL_REGEX = /^https?:\/\//

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'linkEmail',
      title: 'URL/Email',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              { title: 'URL', value: 'url' },
              { title: 'Email', value: 'email' },
            ],
          },
          validation: Rule => Rule.required(),
        }),

        defineField({
          name: 'value',
          title: 'Value',
          type: 'string',
          validation: Rule =>
            Rule.custom((value, context) => {
              const parent = context.parent as { type?: string }

              if (!value)
                return true

              if (parent?.type === 'email') {
                return EMAIL_REGEX.test(value)
                  ? true
                  : 'Invalid email address'
              }

              if (parent?.type === 'url') {
                return URL_REGEX.test(value)
                  ? true
                  : 'Invalid URL'
              }

              return true
            }),
        }),
      ],
    }),
  ],
})
