const { showSuccess } = require('../../utils/util')
const util = require('../../utils/util')

const app = getApp()

const { getPrograms } = app.services

Page({
  data: {
    programs: []
  },

  jumpToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './detail/detail?id=' + id
    })
  },

  onLoad: async function (options) {
    wx.showLoading()
    try {
      // 缓存 programs
      const storedProgramsObj = wx.getStorageSync('programsObj')
      console.log(storedProgramsObj, typeof storedProgramsObj)
      // 不存在缓存 缓存存在但缓存时间超过1天
      if (
        storedProgramsObj === '' ||
        (storedProgramsObj !== '' && (storedProgramsObj.timestamp - (new Date().getTime > 24 * 60 * 60 * 1000)))
      ) {
        let programs = await getPrograms()
        programs = programs.map(program => {
          program.location = `./detail/detail?id=${program.id}`
          return program
        })
        wx.setStorageSync('programsObj', {
          programs,
          timestamp: new Date().getTime()
        })
      }
      const { programs } = wx.getStorageSync('programsObj')
      this.setData({
        programs
      })
    } catch (err) {
      showSuccess('请求失败！')
    }
    wx.hideLoading()
  },
  onShow (e) {
  }
})
