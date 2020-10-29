// pages/mine//pages/student_daolun_2020/index.js
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast'
const qcloud = require('../../../vendor/wafer2-client-sdk/index')
const app = getApp()

Page({

  /**
     * 页面的初始数据
     */
  data: {
    isBind: false,
    studentId: '',
    studentName: ''
  },

  getStudentInfo: async function () {
    const res = await new Promise((resolve, reject) => {
      qcloud.request({
        login: false,
        url: `${app.appData.baseUrl}student_daolun_2020/getStudentInfo`,
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    })

    Toast.clear()

    if (res.data.code !== 0) {
      return
    }

    const { stuNO, name } = res.data.data
    this.setData({
      isBind: true,
      studentId: stuNO,
      studentName: name
    })
  },

  bindStudentId: async function (e) {
    const { studentId, studentName } = e.detail.value

    Toast.loading({
      duration: 0 // 持续展示 toast
    })

    const res = await new Promise((resolve, reject) => {
      qcloud.request({
        login: false,
        url: `${app.appData.baseUrl}student_daolun_2020/bindStudentId`,
        method: 'POST',
        data: {
          studentId,
          studentName
        },
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    })

    Toast.clear()

    if (res.data.code === 0) {
      this.setData({
        isBind: true,
        studentId,
        studentName
      })
      Toast.success('绑定成功！')
    } else {
      Toast.fail('绑定失败！')
    }
  },

  unbindStudentId: async function () {
    Toast.loading({
      duration: 0 // 持续展示 toast
    })

    const res = await new Promise((resolve, reject) => {
      qcloud.request({
        login: false,
        url: `${app.appData.baseUrl}student_daolun_2020/unbindStudentId`,
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    })

    Toast.clear()

    if (res.data.code === 0) {
      this.setData({
        isBind: false
      })
      Toast.success('解绑成功！')
    } else {
      Toast.fail('解绑失败！')
    }
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: async function (options) {
    await this.getStudentInfo()
  },

  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function () {

  },

  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {

  },

  /**
     * 生命周期函数--监听页面隐藏
     */
  onHide: function () {

  },

  /**
     * 生命周期函数--监听页面卸载
     */
  onUnload: function () {

  },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: function () {

  },

  /**
     * 页面上拉触底事件的处理函数
     */
  onReachBottom: function () {

  },

  /**
     * 用户点击右上角分享
     */
  onShareAppMessage: function () {

  }
})
