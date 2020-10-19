module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    wx: 'writable',
    App: 'writable',
    Page: 'writable',
    getApp: 'writable',
    Component: 'writable' // 自定义组件
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    camelcase: 'warn'
  }
}
