const app = getApp()

Page({
  data: {
    programs: [
      { title: '基础题库', subtitle: '针对Adruino编程语言的训练题库', img: 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/software.svg', location: './questionMarket/questionMarket' }
      // { 'title': '实战演练', 'subtitle': '针对应用项目的编程实战题库', 'img': '/images/hardware.svg', 'location':'./spark/single'},
      // {'title':'我的排名', 'subtitle':'你的做题量和正确率，能排在第几名？', 'img':'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/rank.svg', 'location':'./rankList/rankList'},
    ],
    permission: 0
  },

  onLoad: function (options) {
    this.setData({
      // permission: wx.getStorageSync('permission')
      permission: 1
    })
  },

  onShow (e) {
    this.quit()
  },

  quit: function () {
    if (app.tunnel && app.tunnel.isActive()) {
      app.tunnel.close()
      console.log('[tunnelGame][close]')
    }
  }
})
