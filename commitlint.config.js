export default {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'body-max-line-length': [0, 'always', 100],
    'body-leading-blank': [0, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'init',
      ],
    ],
  },

  prompt: {
    questions: {
      type: {
        emojiInHeader: true,
        enum: {
          feat: {
            description: 'A new feature',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            emoji: '📚',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            emoji: '💎',
          },
          refactor: {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            emoji: '📦',
          },
          test: {
            description:
              'Adding missing tests or correcting existing tests',
            emoji: '🚨',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            emoji: '🛠️',
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            emoji: '⚙️',
          },
          chore: {
            description:
              'Other changes that don\'t modify src or test files',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            emoji: '🗑️',
          },
          init: {
            description: 'Initial commit',
            emoji: '🎉',
          },
        },
      },
    },
  },
}
