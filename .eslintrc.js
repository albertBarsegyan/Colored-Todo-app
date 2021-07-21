module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    'react/no-unused-state': 'off',
    'object-curly-newline': 'off',
    indent: 'off',
  },
};
