var config = require('./config')
const Towxml = require('towxml/main')
const services = require('./services/index')

App({
  towxml: new Towxml(),

  services,

  config,

  onLaunch: function (opt) {
  },

  onShow: function (opt) {
  }
})
