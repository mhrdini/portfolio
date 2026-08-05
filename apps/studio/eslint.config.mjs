import antfu, { combine } from '@antfu/eslint-config'
import studio from '@sanity/eslint-config-studio'

export default combine(
  await antfu({
    typescript: true,
    react: false,
    markdown: false,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: false,
      quotes: 'single',
    },
  }),

  studio,
)
