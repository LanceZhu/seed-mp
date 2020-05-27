var app = getApp()
var qcloud = require('../../../vendor/wafer2-client-sdk/index.js')
var util = require('../../../utils/util.js')

Page({

    /**
   * 页面的初始数据
   */
    data: {
        article: ''
    },

    /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        var that = this
        qcloud.request({
            login: false,
            url: `${app.appData.baseUrl}getPrograms`,
            method: 'POST',
            data: {
                id: options.id
            },
            success: (res) => {
                var articleData = app.towxml.toJson(res.data.data[0].content, 'markdown', that)
                articleData.theme = 'light'

                this.setData({
                    article: articleData
                })
            },
            fail (error) {
                util.showSuccess('请求失败!')
                console.log('request fail', error)
            },
            complete: res => {
                wx.hideLoading()
            }
        })
    },

    /**
   * 生命周期函数--监听页面初次渲染完成
   */
    onReady: function () {

    },

    /**
   * 生命周期函数--监听页面显示
   */
    onShow: function () {

    },

    /**
   * 生命周期函数--监听页面隐藏
   */
    onHide: function () {

    },

    /**
   * 生命周期函数--监听页面卸载
   */
    onUnload: function () {

    },

    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh: function () {

    },

    /**
   * 页面上拉触底事件的处理函数
   */
    onReachBottom: function () {

    },

    /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {

    }
})
