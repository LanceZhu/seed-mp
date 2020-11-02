var app = getApp()
const { showSuccess } = require('../../../utils/util.js')

const { getProgram } = app.services

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
  onLoad: async function (options) {
    const { id } = options
    try {
      wx.showLoading()
      const program = await getProgram(id)
      console.log(program)
      this.setData({
        article: program.content
      })
    } catch (err) {
      showSuccess('请求失败！')
      console.error(err)
    }
    wx.hideLoading()
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
