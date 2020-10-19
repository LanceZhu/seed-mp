const app = getApp()

Page({
  data: {
    userInfo: {},
    apps: [
      {
        desc: '学习报告',
        icon: 'apps-o',
        url: './schedule/schedule'
      },
      {
        desc: '历史错题',
        icon: 'todo-list-o',
        url: './mistake/mistake'
      },
      {
        desc: '签到查询',
        icon: 'flag-o',
        url: './calendar/calendar'
      }
      // { 'img': '/images/PK.svg', 'desc': '双人PK', 'location': '/pages/double/double' },
      // { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/user_au.svg', 'desc': '用户认证', 'location': './authorize/authorize' }
    ],
    utils: [
      {
        desc: '消息通知',
        icon: 'volume-o',
        url: 'news/news'
      },
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
