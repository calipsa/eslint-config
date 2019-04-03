module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
    jest: true,
  },
  rules: {
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-plusplus': 0,
    'no-bitwise': 0,
    'no-mixed-operators': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    'no-duplicate-imports': 2,
    'no-unused-expressions': [
      2,
      { allowTernary: true },
    ],

    'space-before-blocks': [2, 'always'],
    'arrow-parens': 0,
    'consistent-return': 0,
    'function-paren-newline': 1,

    'max-len': [
      2, {
        code: 80,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      }],
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
  },
  globals: {
    __DEV__: true,
    __SSR__: true,
  },
};
