let app = getApp()

Page({
    data: {
        items: [{ 'title': '新知学习', 'content': '知识点+题', 'img': '/images/KnowledgePoint.svg', 'location': '../basic/basic' },
            { 'title': '专属题场', 'content': '刷题', 'img': '/images/exercise.svg', 'location': '../single/single' },
            { 'title': '参考项目', 'content': '实例演示', 'img': '/images/project.svg', 'location': '../project/project' },
            { 'title': '个人中心', 'content': '用户', 'img': '/images/user.svg', 'location': '../mine/pages/mine' }
        ],
        winWidth: 0,
        winHeight: 0,
        ratio: 0,
        userInfo: {},
        res: '',
        broadcast: 1,
        showWelcome: 0
    },

    jumpToDetail: function (e) {
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
        // 判断用户是否登录
        if (!app.globalData.userInfo) {
            wx.navigateTo({
                url: '/pages/authorize/authorize'
            })
            console.log('[main]login please')
        } else {
            console.log('[main]login success')
            if (that.data.showWelcome) {
                this.setData({
                    showWelcome: 0
                })
                wx.navigateTo({
                    url: '../welcome/welcome'
                })
            }
        }
        wx.showShareMenu({
            withShareTicket: true
        })
    },
    onReady: function () {},
    onShow: function () {
        this.closeTunnel()
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
    },
    closeTunnel () {
    // 当信道连接或者重连了时，关闭已连接的信道
        if (app.appData.tunnelStatus === 'connect' || app.appData.tunnelStatus === 'reconnect') {
            app.tunnel.close()
        }
    }
})
