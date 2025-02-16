/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "vue/no-unused-components": "off",
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
