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
    "prettier/prettier": [
      'error',
      {
        "printWidth": 80,
        "singleQuote": true,
        "trailingComma": "es5",
        "tabWidth": 4
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
