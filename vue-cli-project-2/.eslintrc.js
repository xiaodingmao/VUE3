const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: { jest: true, browser: true },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
           alias: {
           '~': path.join(__dirname, 'src/app'),
           },
           extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
         },
        },
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-unresolved': 0,
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
  },
};