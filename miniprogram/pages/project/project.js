const { showSuccess } = require('../../utils/util')
const util = require('../../utils/util')

const app = getApp()

const { getPrograms } = app.services

Page({
  data: {
    programs: []
  },

  jumpToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './detail/detail?id=' + id
    })
  },

  onLoad: async function (options) {
    var that = this
    util.setDeviceSize(that)
    wx.showLoading()
    try {
      const programs = await getPrograms()
      this.setData({
        programs
      })
    } catch (err) {
      showSuccess('请求失败！')
    }
    wx.hideLoading()
  },
  onShow (e) {
  }
})
