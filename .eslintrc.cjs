/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-unused-components': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ],
    'no-console': 'off'
  }
}
