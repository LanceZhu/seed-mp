const util = require('../../../../utils/util.js')

Page({
  data: {
    content: '',
    code: 'PASS'
  },

  getInputValue: function (e) {
    this.setData({
      content: e.detail.value
    })
    console.log(e.detail.value)
  },
  submit: function () {
    if (this.data.content === this.data.code) {
      util.showSuccess('授权成功')
      wx.setStorageSync('permission', 1)
    } else {
      util.showSuccess('授权失败')
      wx.setStorageSync('permission', 0)
    }
  }
})
