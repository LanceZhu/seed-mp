const qcloud = require('../../../vendor/wafer2-client-sdk/index.js')
const app = getApp()
const util = require('../../../utils/util.js')

Page({
  data: {
    question_history: [],
    question_history_errors: [],
    question_sum: 0,
    question_error_sum: 0,
    question_chapter: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 十个章节
    question_chapter_right: [0, 0, 0, 0, 0, 0, 0, 0, 0], // 十个章节
    question_chapter_right_ratio: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 十个章节
    currentTab: 0
  },

  question_history: function (e) {
    var that = this
    wx.showLoading({
      title: '加载中...'
    })
    qcloud.request({
      login: true,
      url: `${app.appData.baseUrl}question_history`,
      method: 'POST',
      data: {
        type: 'answer_detail_update'
      },
      success: (res) => {
        const data_error = []
        const data = res.data.data
        const data_chapter = that.data.question_chapter
        const data_chapter_right = that.data.question_chapter_right
        const data_chapter_right_ratio = that.data.question_chapter_right_ratio
        for (const i in data) {
          if (data[i].datetime) {
            const date = new Date(data[i].datetime)
            data[i].datetime = util.formatTime(date)
          }
          data_chapter[parseInt(data[i].chapter_id) - 1]++
          if (data[i].answer_right) {
            data_chapter_right[parseInt(data[i].chapter_id) - 1]++
          }
          if (!data[i].answer_right) {
            data_error.push(data[i])
          }
        }
        for (const i in data_chapter) {
          if (data_chapter[i]) {
            console.log(data_chapter_right[i] / data_chapter[i])
            data_chapter_right_ratio[i] = data_chapter_right[i] / data_chapter[i]
          }
        }
        console.log('每章节做题数', data_chapter)
        console.log('每章节正确数', data_chapter_right)
        console.log('总正确率', (data.length - data_error.length) / data.length)
        console.log('各章节正确率', data_chapter_right_ratio)
        that.setData({
          question_history: data,
          question_history_errors: data_error,
          question_sum: data.length,
          question_error_sum: data_error.length
        })
      },
      fail (error) {
        util.showSuccess('请求失败')
        console.log('[request fail]', error)
      },
      complete: res => {
        wx.hideLoading()
      }
    })
  },

  question_detail: function (e) {
    wx.navigateTo({
      url: './tutorial/tutorial?questionid=' + e.currentTarget.dataset.questionid
    })
  },

  bindChange: function (e) {
    this.setData({ currentTab: e.detail.current })
  },

  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  onLoad: function (options) {
    var that = this
    that.question_history()
    that.setData({
      winHeight: wx.getStorageSync('winHeight'),
      winWidth: wx.getStorageSync('winWidth'),
      ratio: wx.getStorageSync('ratio')
    })
  },
  onReady: function () {},
  onShow: function () {},
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
