var app = getApp()
var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var util = require('../../utils/util.js')

Page({
    data: {
        programs: [ ],
        permission: 0
    },

    jumpToDetail: function (e) {
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: './projectDetail/projectDetail?id=' + id
        })
    },

    onLoad: function (options) {
        var that = this
        this.setData({
            // permission: wx.getStorageSync('permission')
            permission: 1
        })
        util.setDeviceSize(that)
        wx.showLoading()
        qcloud.request({
            login: false,
            url: `${app.appData.baseUrl}getPrograms`,
            method: 'POST',
            data: {
                'id': ''
            },
            success: (res) => {
                that.setData({
                    programs: res.data.data
                })
            },
            fail (error) {
                util.showSuccess('请求失败!')
                console.log('request fail', error)
            },
            complete: res => {
                wx.hideLoading()
            }
        })
    },
    onShow (e) {
    }
})
