module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2], // Enforce 2-space indentation
    'linebreak-style': ['error', 'unix'], // Ensure Unix line endings
    quotes: ['error', 'single'], // Enforce single quotes
    semi: ['error', 'always'], // Require semicolons
  },
};
