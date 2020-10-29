const util = require('../../utils/util.js')
const app = getApp()

const { request } = app.services

Page({
  data: {
  },
  /**
   * 用户授权登录
   */
  bindGetUserInfo: async function (e) {
    util.showBusy('正在登录')
    const { userInfo } = e.detail

    try {
      const res = await request.login({
        userInfo
      })
      if (res.data.code !== -1) {
        util.showSuccess('登录成功！')
  
        wx.setStorageSync('openid', res.data.data.openid)
        wx.setStorageSync('userInfo', userInfo)
        app.globalData.userInfo = userInfo
  
        wx.navigateBack()
      } else {
        util.showSuccess('登录失败！')
      }
    } catch (err) {
      util.showSuccess('登录失败！')
    }
  }
})
