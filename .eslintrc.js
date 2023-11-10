module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    semi: ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
