module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    semi: ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
  },
}
