Page({
  data: {
    items: [
      { name: '自动控制路灯', children: ['代码详解（一）', '硬件搭建（一）', '数字Digital和模拟Analog', 'delay()'], id: 1, open: false },
      { name: '彩色LED的控制', children: ['代码详解（二）', '硬件搭建（二）', 'pinMode()', 'digitalWrite()', 'digitalRead()'], id: 2, open: false },
      { name: '数字温度计', children: ['代码详解（三）', '硬件搭建（三）', 'analogReference()', 'analogRead()'], id: 3, open: false },
      { name: '智能温控风扇', children: ['代码详解（四）', '硬件搭建（四）'], id: 4, open: false },
      { name: '同相比例运算', children: ['代码详解（五）', '硬件搭建（五）', 'Serial.begin()', 'Serial.print()和Serial.println()'], id: 5, open: false },
      { name: '指尖开关', children: ['代码详解（六）', '硬件搭建（六）'], id: 6, open: false },
      { name: '触摸电子琴', children: ['代码详解（七）', '硬件搭建（七）', 'tone()', 'noTone()'], id: 7, open: false },
      { name: '网络基础实验', children: ['WiFi连接实验', 'TCP建立连接实验', 'HTTP请求实验', 'Wireshark抓包实验', '计算机网络技能实验', '路由器配置实验', '交换机端口配置实验', 'VTP配置实验', '拓展实验——微信公众平台开发实践（基于腾讯云服务器）'], id: 8, open: false },
      { name: '微信小程序', children: ['微信小程序简介', '小程序注册教程', '小程序开发基础教程', '腾讯云服务器购买指南', '域名购买与备案'], id: 9, open: false },
      { name: '云API实验', children: ['Fiddler调用', 'oneNET的接受数据API调用', '微信小程序前端调用', 'Web前端（JQuery）调用', '服务器端（NodeJS）调用', '服务器端（NodeJS）数据库（mongoDB）的基本使用', '服务器端（PHP）调用'], id: 10, open: false }
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
