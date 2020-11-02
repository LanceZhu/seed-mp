const util = require('../../utils/util.js')
const app = getApp()

const { bindUserInfo } = app.services

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
      await bindUserInfo(userInfo)
      util.showSuccess('登录成功！')
      wx.setStorageSync('userInfo', userInfo)
      wx.navigateBack()
    } catch (err) {
      util.showSuccess('登录失败！')
      console.error(err)
    }
  }
})
