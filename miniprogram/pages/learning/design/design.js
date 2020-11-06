const util = require('../../../utils/util.js')

Page({
  data: {
    items: [{ name: '团队建设', children: ['吉祥物设计'], id: 1, open: false },
      { name: '用户调研', children: ['用户画像', '用户旅程图'], id: '2', open: false },
      { name: '创意产生', children: ['疯狂八分钟'], id: 3, open: false },
      { name: '方向确定', children: ['四象限法'], id: 4, open: false },
      { name: '方案设计', children: ['海报制作'], id: 5, open: false }
    ]
  },

  // 打开子菜单
  kindToggle: function (e) {
    var id = Number(e.currentTarget.id)
    var items = this.data.items
    for (var i = 0, len = items.length; i < len; ++i) {
      if (items[i].id === id) {
        items[i].open = !items[i].open
      } else {
        items[i].open = false
      }
    }
    this.setData({
      items: items
    })
  },

  onLoad: function (options) {
  },

  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
