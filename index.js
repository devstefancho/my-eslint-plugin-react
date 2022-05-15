const prettierRules = require('./prettier');

module.exports = {
  extends: [],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": prettierRules.rules
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
