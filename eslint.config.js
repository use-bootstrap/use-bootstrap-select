import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'docs/*',
      'public/*',
      '.vscode/*',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'curly': ['error', 'all'],
      'antfu/consistent-list-newline': 'off',
      'style/jsx-one-expression-per-line': 'off',
    },
  },
)
