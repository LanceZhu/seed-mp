const app = getApp()

Page({
  data: {
    question_sort: []
  },
  onLoad (options) {
    this.getFightingSort()
  },
  onShow () {
    this.closeTunnel()// 当信道连接或者重连了时，关闭已连接的信道
  },
  onUnload () {
    this.closeTunnel()// 当信道连接或者重连了时，关闭已连接的信道
  },
  getFightingSort () {
    const that = this
    that.setData({
      question_sort: [{ id: 1, sort: '综合' }]
    })
  },
  gotoFightingMatch (e) {
    wx.redirectTo({
      url: `../fighting_match/fighting_match?sortId=${e.target.dataset.sortid} `
    })
  },
  closeTunnel () {
    // 当信道连接或者重连了时，关闭已连接的信道
    if (app.appData.tunnelStatus === 'connect' || app.appData.tunnelStatus === 'reconnect') {
      app.tunnel.close()
    }
  }
})