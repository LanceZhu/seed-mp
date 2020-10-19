let app = getApp()

Page({
    data: {
        userInfo: {},
        extentions: [
            { 'img': '/images/progress.svg', 'desc': '学习报告', 'location': './schedule/schedule' },
            { 'img': '/images/book.svg', 'desc': '历史错题', 'location': './mistake/mistake' },
            { 'img': '/images/calendar.svg', 'desc': '签到查询', 'location': './calendar/calendar' },
            { 'img': '/images/news.svg', 'desc': '消息通知', 'location': 'news/news' },
            { 'img': '/images/upload.svg', 'desc': '反馈', 'location': './feedback/feedback' }
            // { 'img': '/images/PK.svg', 'desc': '双人PK', 'location': '/pages/double/double' },
            // { 'img': '/images/user_au.svg', 'desc': '用户认证', 'location': './authorize/authorize' }
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
