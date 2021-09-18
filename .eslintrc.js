module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
    }],
    'vue/attributes-order': ['error', {
      alphabetical: true,
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['span', 'v-icon', 's-icon', 's-btn'],
    }],
    'max-len': 'off',
    'vue/max-len': ['error', {
      code: 120,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],
  },
};
