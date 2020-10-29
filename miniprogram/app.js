var config = require('./config')
const Towxml = require('towxml/main')
const services = require('./services/index')

App({
  towxml: new Towxml(),
  appData: {
    appId: config.service.appId,
    baseUrl: `${config.service.host}/weapp/`,
    openId: ''
  },

  globalData: {
    userInfo: null
  },

  services,

  isLogged () {
    const openid = wx.getStorageSync('openid')
    return openid !== ''
  },

  onLaunch: function (opt) {
  },

  onShow: function (opt) {
  }
})
