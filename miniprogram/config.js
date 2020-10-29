// const host = 'https://f00bar.top' // 线上环境
const host = 'http://localhost:8000' // 本地开发环境
var appId = 'wx671c2ea3d46645f0' // Arduino快速入门
const BASE_URL = `${host}/weapp`

var config = {

  BASE_URL,

  service: {
    appId,

    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`
  }
}

module.exports = config
