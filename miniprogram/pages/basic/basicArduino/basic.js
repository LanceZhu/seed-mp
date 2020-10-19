let util = require('../../../utils/util.js')

Page({
    data: {
        itemss: [{ 'name': 'Arduino语言介绍', 'children': ['Arduino简介', 'Arduino开发环境的使用', '初识Arduino语言', '编程规范'], 'id': '1', 'locked': false, 'open': false },
            { 'name': '变量', 'children': ['变量和常量简介', 'int', 'float/double', 'char', 'boolean', '数据类型修饰符', 'typedef声明'], 'id': '2', 'locked': true, 'open': false },
            { 'name': '运算符', 'children': ['算数运算符', '赋值运算符', '关系运算符', '逻辑运算符', 'sizeof'], 'id': 3, 'locked': true, 'open': false },
            { 'name': '控制语句', 'children': ['if', 'for', 'while', 'break和continue语句'], 'id': 4, 'locked': true, 'open': false },
            { 'name': '数组', 'children': ['数组简介', '字符串数组'], 'id': 5, 'locked': true, 'open': false },
            { 'name': '函数（一）', 'children': ['函数简介', '函数声明', '函数体', '函数调用', '函数重载'], 'id': 6, 'locked': true, 'open': false },
            { 'name': '函数（二）', 'children': ['Communication', 'Digital IO', 'Analogue IO', 'Advanced IO', 'Times', '位操作', '外部中断、开关中断'], 'id': 7, 'locked': true, 'open': false }
            // { 'name': '指针', 'children': ['指针'], 'id': 8, 'locked': true, 'open': false },
            // { 'name': '类和对象', 'children': ['定义', '访问成员', '外部库的调用'], 'id': 9, 'locked': true, 'open': false }
        ],
        items: []
    },

    // navigator取代
    navigateToDetail: function (e) {
        console.log(e.currentTarget.dataset.id)
        var sortId = e.currentTarget.dataset.id
        if (!e.currentTarget.dataset.locked) {
            wx.navigateTo({
                url: '../basicDetail/basicDetail?sort_id=' + sortId
            })
        } else {
            wx.showModal({
                title: ':<',
                content: '未开启'
            })
        }
    },

    // 打开子菜单
    kindToggle: function (e) {
        let id = e.currentTarget.id
        let itemss = this.data.itemss
        for (var i = 0, len = itemss.length; i < len; ++i) {
            if (itemss[i].id == id) {
                itemss[i].open = !itemss[i].open
            } else {
                itemss[i].open = false
            }
        }
        this.setData({
            itemss: itemss
        })
    },

    onLoad: function (options) {
        var that = this
        util.setDeviceSize(that)
    },

    onShareAppMessage: function () {
        return {
            title: '碎片时间学编程',
            path: '/pages/main/main'
        }
    }
})
