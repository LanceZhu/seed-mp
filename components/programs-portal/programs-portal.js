// components/programsPortal.js
Component({
    /**
   * 组件的属性列表
   */
    properties: {
        programs: {
            type: Array,
            value: []
        }
    },

    /**
   * 组件的初始数据
   */
    data: {
        winHeight: 0,
        winWidth: 0,
        ratio: 0
    },

    lifetimes: {
        attached: function () {
            console.log('test')
            this.setData({
                winHeight: wx.getStorageSync('winHeight'),
                winWidth: wx.getStorageSync('winWidth'),
                ratio: wx.getStorageSync('ratio')
            })
        }
    },

    /**
   * 组件的方法列表
   */
    methods: {
        jumpToDetail: function (e) {
            let location = e.currentTarget.dataset.location
            wx.navigateTo({
                url: location
            })
        }
    }
})
