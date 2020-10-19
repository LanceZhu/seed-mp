let app = getApp()

Page({
    data: {
        userInfo: {},
        extentions: [
            { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/progress.svg', 'desc': '学习报告', 'location': './schedule/schedule' },
            { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/book.svg', 'desc': '历史错题', 'location': './mistake/mistake' },
            { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/calendar.svg', 'desc': '签到查询', 'location': './calendar/calendar' },
            { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/news.svg', 'desc': '消息通知', 'location': 'news/news' },
            { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/upload.svg', 'desc': '反馈', 'location': './feedback/feedback' }
            // { 'img': '/images/PK.svg', 'desc': '双人PK', 'location': '/pages/double/double' },
            // { 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/user_au.svg', 'desc': '用户认证', 'location': './authorize/authorize' }
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
