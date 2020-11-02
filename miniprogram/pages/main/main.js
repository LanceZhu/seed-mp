const app = getApp()

const { isLogged } = app.services

Page({
  data: {
    items: [
      { title: '新知学习', content: '知识点+题', img: '/images/KnowledgePoint.svg', location: '../learning/learning' },
      { title: '专属题场', content: '刷题', img: '/images/exercise.svg', location: '../questions/index' },
      { title: '参考项目', content: '实例演示', img: '/images/project.svg', location: '../project/project' },
      { title: '个人中心', content: '用户', img: '/images/user.svg', location: '../mine/mine' }
    ],
    winWidth: 0,
    winHeight: 0,
    ratio: 0
  },

  toDetail: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.location
    })
  },

  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log('[main][winHeight]' + res.windowHeight)
        console.log('[main][winWidth]' + res.windowWidth)
        console.log('[main][ratio]' + 750 / res.windowWidth)
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          ratio: 750 / res.windowWidth
        })
        wx.setStorageSync('winHeight', res.windowHeight)
        wx.setStorageSync('winWidth', res.windowWidth)
        wx.setStorageSync('ratio', 750 / res.windowWidth)
      }
    })
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
