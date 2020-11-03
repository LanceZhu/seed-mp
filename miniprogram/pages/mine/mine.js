const app = getApp()

const { config } = app
const { USERINFO_KEY } = config.localStorage
const { isLogged } = app.services

Page({
  data: {
    userInfo: {},
    apps: [
      {
        desc: '历史错题',
        icon: 'todo-list-o',
        url: './mistake/mistake'
      }
    ],
    utils: [
      {
        desc: '反馈',
        icon: 'smile-comment-o',
        url: './feedback/feedback'
      }
    ]
  },

  jumpToDetail: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.location
    })
  },

  onLoad: function (options) {
  },

  onShow: function () {
    if (!isLogged()) {
      wx.navigateTo({
        url: '/pages/authorize/authorize'
      })
    } else {
      const userInfo = wx.getStorageSync(USERINFO_KEY)
      this.setData({
        userInfo
      })
    }
  },

  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
