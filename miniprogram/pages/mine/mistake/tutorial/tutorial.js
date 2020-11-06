var util = require('../../../../utils/util.js')
var app = getApp()

Page({
  data: {
    question: {},
    ask: {},
    right_answer: '',
    showContent: false
  },

  onLoad: function (opt) {
    var that = this
    wx.showLoading({
      title: '加载中...'
    })
    wx.request({
      url: `${app.appData.baseUrl}question_by_id`,
      method: 'POST',
      data: {
        id: opt.questionid
      },
      success: (res) => {
        console.log('[question_by_id]', res.data.data)
        const question = res.data.data[0]
        let right_answer = ''
        if (Object.getOwnPropertyNames(question).length) {
          question.answer = JSON.parse(question.answer)
          var ask = app.towxml.toJson(question.ask, 'markdown', that)
          ask.theme = 'min'
          for (let i = 0; i < question.answer.length; i++) {
            if (question.answer[i].right === 1) {
              right_answer = question.answer[i].answer
            }
          }
          that.setData({
            showContent: true,
            ask: ask,
            question: question,
            right_answer: right_answer
          })
        }
        wx.hideLoading()
      },
      fail (error) {
        wx.hideLoading()
        util.showSuccess('请求失败')
        console.log('[request fail]', error)
      }
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
