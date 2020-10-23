// miniprogram/pages/socket/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        socketId: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
        wx.connectSocket({
            url: 'ws://localhost:8001'
        })
        wx.onSocketOpen((res) => {
            console.log('open: ', res)
        })
        wx.onSocketMessage((res) => {
            console.log('message: ', res)
            const data = JSON.parse(res.data)
        })
        wx.onSocketClose(res => {
            console.log('close: ', res)
        })
        wx.onSocketError((res) => {
            console.log('error: ', res)
        })
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