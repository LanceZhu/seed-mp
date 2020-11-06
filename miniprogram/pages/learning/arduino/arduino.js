const util = require('../../../utils/util.js')

Page({
  data: {
    items: [
      { name: 'Arduino语言介绍', children: ['Arduino简介', 'Arduino开发环境的使用', '初识Arduino语言', '编程规范'], id: 1, open: false },
      { name: '变量', children: ['变量和常量简介', 'int', 'float/double', 'char', 'boolean', '数据类型修饰符', 'typedef声明'], id: 2, open: false },
      { name: '运算符', children: ['算数运算符', '赋值运算符', '关系运算符', '逻辑运算符', 'sizeof'], id: 3, open: false },
      { name: '控制语句', children: ['if', 'for', 'while', 'break和continue语句'], id: 4, open: false },
      { name: '数组', children: ['数组简介', '字符串数组'], id: 5, open: false },
      { name: '函数（一）', children: ['函数简介', '函数声明', '函数体', '函数调用', '函数重载'], id: 6, open: false },
      { name: '函数（二）', children: ['Communication', 'Digital IO', 'Analogue IO', 'Advanced IO', 'Times', '位操作', '外部中断、开关中断'], id: 7, open: false }
      // { 'name': '指针', 'children': ['指针'], 'id': 8, 'open': false },
      // { 'name': '类和对象', 'children': ['定义', '访问成员', '外部库的调用'], 'id': 9, 'open': false }
    ]
  },

  // 打开子菜单
  kindToggle: function (e) {
    const id = Number(e.currentTarget.id)
    const items = this.data.items
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

  onLoad: function () {
  },

  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
