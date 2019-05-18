module.exports = {
  extends: [
    'airbnb-base',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
    jest: true,
  },
  rules: {
    'implicit-arrow-linebreak': 0,
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
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],

    'arrow-parens': 0,
    'consistent-return': 0,
    'function-paren-newline': 1,

    'max-len': [2, {
      code: 80,
      tabWidth: 2,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    }],

    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],

    'import/order': [2, {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
    }],
  },
  globals: {
    __DEV__: true,
    __SSR__: true,
  },
};
