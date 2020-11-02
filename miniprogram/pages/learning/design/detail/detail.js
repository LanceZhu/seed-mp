const { showSuccess } = require('../../../../utils/util.js')
const app = getApp()

const { getLearning } = app.services

Page({
  data: {
    article: {},
    chapter: '',
    name: '',
    chapterId: '',
    nameId: '',
    isLoading: true
  },

  continue: function () {
    wx.navigateTo({
      url: '../../../questions/index' + '?chapterId=' + this.data.chapterId + '&nameId=' + this.data.nameId + '&title=小结' + '&question_counts=3' + '&fromBasicDetail=true'
    })
  },

  onLoad: async function (options) {
    wx.showLoading({
      title: '加载中...'
    })
    const { name, chapter, chapterId, nameId } = options

    this.data.chapterId = chapterId
    this.data.nameId = nameId

    try {
      const content = await getLearning(name, chapter)
      this.setData({
        article: content,
        isLoading: false
      })
    } catch (err) {
      showSuccess('请求失败！')
      console.error(err)
    }

    wx.hideLoading()
  },
  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
