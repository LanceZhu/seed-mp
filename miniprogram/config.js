const host = 'https://f00bar.top' // 线上环境
// const host = 'http://localhost:9008' // 本地开发环境
const WS_URL = 'wss://f00bar.top/wss'
// const WS_URL = 'ws://localhost:8001'
const BASE_URL = `${host}/weapp`

var config = {
  BASE_URL,
  WS_URL,
  localStorage: { // wx storage key
    SESSION_KEY: 'openid',
    USERINFO_KEY: 'userInfo'
  }
}

module.exports = config
