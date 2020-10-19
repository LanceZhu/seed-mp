const qcloud = require('../../vendor/wafer2-client-sdk/index')
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    content: '',
    code: 'PASS'
  },

  getInputValue: function (e) {
    this.setData({
      content: e.detail.value
    })
    console.log(e.detail.value)
  },
  /**
   * 用户授权登录
   */
  bindGetUserInfo: function (e) {
    util.showBusy('正在登录')
    if (this.data.content === this.data.code) {
      console.log('已授权')
      // app.globalData.permission = 1
      wx.setStorageSync('permission', 1)
    } else {
      console.log('未授权')
      wx.setStorageSync('permission', 0)
    }
    if (app.globalData.userInfo) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          util.showSuccess('登录成功')
          // console.log('登录成功', res)
          app.globalData.userInfo = res
          // wx.setStorageSync('userInfo', res)
          wx.setStorageSync('logged', true)
          wx.navigateBack()
        },
        fail: err => {
          console.log('[login][err]', err)
          util.showSuccess('登录失败！')
        }
      })
    } else {
      qcloud.login({
        success: res => {
          util.showSuccess('登录成功')
          // console.log('登录成功', res)
          app.globalData.userInfo = res
          wx.setStorageSync('logged', true)
          // wx.setStorageSync('userInfo', res)
          wx.navigateBack()
        },
        fail: err => {
          console.error(err)
          util.showSuccess('登录错误!')
          console.log('登录失败!', err)
        }
      })
    }
  }
})
