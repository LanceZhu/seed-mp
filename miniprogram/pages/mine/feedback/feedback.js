const { sleep, showSuccess } = require('../../../utils/util.js')
const app = getApp()

const { feedback } = app.services

Page({
  data: {
    options: [{
      title: 'Bug反馈',
      code: 103
    }, {
      title: '功能需求',
      code: 200
    }, {
      title: '吐槽',
      code: 300
    }],
    choose: 103,
    content: ''
  },
  getOption: function (e) {
    this.setData({
      choose: parseInt(e.currentTarget.dataset.code)
    })
  },
  getInputValue: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  confirm: async function () {
    if (this.data.content) {
      wx.showLoading({
        title: '正在提交...'
      })
      try {
        await feedback(this.data.choose, this.data.content.slice(0, 19), this.data.content)
        showSuccess('反馈成功！')
        await sleep(1500)
        wx.navigateBack()
      } catch (err) {
        showSuccess('反馈失败！')
        console.error(err)
      }
      wx.hideLoading()
    }
  },
  onLoad: function (opt) { },
  onReady: function () { },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '反馈'
    })
  },
  onHide: function () {
  },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
