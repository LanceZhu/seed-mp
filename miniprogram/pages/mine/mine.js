const app = getApp()

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
    var that = this
    that.setData({
      userInfo: app.globalData.userInfo
    })
  },

  onShow: function () {},

  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
