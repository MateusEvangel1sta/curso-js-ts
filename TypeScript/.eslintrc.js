// Após realizar toda a configuração aqui, rode no terminal, o seguinte comando: `npx @eslint/migrate-config .eslintrc.js`.

// Este arquivo só está sendo mantido por conta das aulas do curso

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },

  plugins: ['@typescript-eslint'],
  
  rules: {},
};