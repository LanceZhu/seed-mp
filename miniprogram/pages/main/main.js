const app = getApp()

const { isLogged } = app.services

Page({
  data: {
    items: [{
      title: '新知学习',
      content: '知识点+题',
      img: '/images/learning.svg',
      location: '../learning/learning',
      backgroundColor: 'rgb(245, 103, 93)'
    }, {
      title: '专属题场',
      content: '刷题',
      img: '/images/questions.svg',
      location: '../questions/index',
      backgroundColor: 'rgb(236, 220, 73)'
    }, {
      title: '参考项目',
      content: '实例演示',
      img: '/images/project.svg',
      location: '../project/project',
      backgroundColor: 'rgb(114, 203, 111)'
    }, {
      title: '个人中心',
      content: '用户',
      img: '/images/mine.svg',
      location: '../mine/mine',
      backgroundColor: 'rgb(94, 189, 183)'
    }]
  },

  toDetail: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.location
    })
  },

  onLoad: function (options) {
  },
  onReady: function () {},
  onShow: function () {
    // 需登录
    if (!isLogged()) {
      wx.navigateTo({
        url: '/pages/authorize/authorize'
      })
    }
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
