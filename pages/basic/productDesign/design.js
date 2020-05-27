let util = require('../../../utils/util.js')

Page({
    data: {
        itemss: [{ 'name': '团队建设', 'children': ['吉祥物设计'], 'id': '1', 'locked': false, 'open': false },
            { 'name': '用户调研', 'children': ['用户画像', '用户旅程图'], 'id': '2', 'locked': true, 'open': false },
            { 'name': '创意产生', 'children': ['疯狂八分钟'], 'id': 3, 'locked': true, 'open': false },
            { 'name': '方向确定', 'children': ['四象限法'], 'id': 4, 'locked': true, 'open': false },
            { 'name': '方案设计', 'children': ['海报制作'], 'id': 5, 'locked': true, 'open': false }
        ],
        items: []
    },

    // navigator取代
    navigateToDetail: function (e) {
        console.log(e.currentTarget.dataset.id)
        let sortId = e.currentTarget.dataset.id
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
        var id = e.currentTarget.id; var itemss = this.data.itemss
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
