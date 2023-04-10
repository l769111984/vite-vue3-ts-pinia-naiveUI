module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
    // 'vue/setup-complier-macros': true
  },
  extends: [
    'plugin:leon-rule/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    '@vue/standard',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-debugger': 0,
    'no-var': 2,
    'vue/no-v-html': 0,
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0
  }
}
