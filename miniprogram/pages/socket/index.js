const { sleep } = require('../../utils/util')
const app = getApp()

// miniprogram/pages/socket/index.js
// 迁移 pages/single/questionMarket，剥离 wafer-node-sdk
Page({

  /**
     * 页面的初始数据
     */
  data: {
    socketId: '', // socket id
    question: {}, // 问题
    choiceIndex: undefined, // 用户回答
    isChoosed: false,
    startTime: (new Date()).getTime(), // 答题开始时间
    showQuestionOption: true, // 配置问题
    chapters: [
      { chapter: 'Arduino语言介绍', chapterId: 1, checked: false },
      { chapter: '变量', chapterId: 2, checked: false },
      { chapter: '运算符', chapterId: 3, checked: false },
      { chapter: '控制语句', chapterId: 4, checked: false },
      { chapter: '数组', chapterId: 5, checked: false },
      { chapter: '函数（一）', chapterId: 6, checked: false },
      { chapter: '函数（二）', chapterId: 7, checked: false }
      // { chapter: "指针", chapterId: 8, checked: false },
      // { chapter: "类和对象", chapterId: 9, checked: false },
    ]
  },

  initSocket (openId, questionOption) {
    wx.connectSocket({
      url: 'ws://localhost:8001'
    })
    wx.onSocketOpen((res) => {
      console.log('open: ', res)
      wx.sendSocketMessage({
        data: JSON.stringify({
          type: 'initialization',
          data: {
            questionOption
          }
        })
      })
    })
    wx.onSocketMessage((res) => {
      console.log('message: ', res)
      const data = JSON.parse(res.data)
      if (data.type === 'question') {
        const question = data.data.question[0]
        question.ask = app.towxml.toJson(question.ask, 'markdown')
        question.answer = JSON.parse(question.answer)
        this.setData({
          question: data.data.question[0],
          isChoosed: false,
          startTime: (new Date()).getTime()
        })
      }
    })
    wx.onSocketClose(res => {
      console.log('close: ', res)
    })
    wx.onSocketError((res) => {
      console.log('error: ', res)
    })
  },

  // 根据章节建立 ws 链接
  selectQuesOption () {
    this.setData({
      showQuestionOption: false
    })
    let chapters = this.data.chapters.reduce((acc, cur) => {
      if (cur.checked) {
        acc.push(cur.chapterId)
      }
      return acc
    }, [])
    if (chapters.length === 0) {
      chapters = this.data.chapters.reduce((acc, cur) => {
        acc.push(cur.chapterId)
        return acc
      }, [])
    }
    const questionOption = {
      type: 'chapters',
      data: {
        chapters
      }
    }
    this.initSocket('openId', questionOption)
  },

  // 选择问题章节，多选框状态切换
  checkboxChange: function (e) {
    const values = e.detail.value

    const chapters = this.data.chapters
    for (var i = 0; i < chapters.length; i++) {
      chapters[i].checked = false
      for (var j = 0; j < values.length; j++) {
        if (chapters[i].chapter === values[j]) {
          chapters[i].checked = true
        }
      }
    }

    this.setData({
      chapters
    })
  },

  // 提交答题
  async answer (e) {
    if (this.data.isChoosed) return

    const { index: choiceIndex } = e.target.dataset
    this.setData({
      isChoosed: true,
      choiceIndex
    })

    await sleep(1000)

    const curQuestion = this.data.question

    let rightIndex = 0

    for (let i = 0; i < curQuestion.answer.length; i++) {
      const choice = curQuestion.answer[i]
      if (choice.right) {
        rightIndex = i
        break
      }
    }

    const answer = {
      id: this.data.question.id,
      startTime: this.data.startTime,
      endTime: (new Date()).getTime()
    }

    wx.sendSocketMessage({
      data: JSON.stringify({
        type: 'answer',
        data: {
          answer
        }
      })
    })

    if (choiceIndex !== rightIndex) {
      wx.setStorageSync('question', curQuestion)
      wx.navigateTo({
        url: './analysis/index'
      })
    }
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    // 根据新知学习章节建立 ws 链接
    if (options.fromBasicDetail) {
      this.setData({
        showQuestionOption: false
      })
      const { chapterId, nameId: unitId, question_counts: counts } = options
      const questionOption = {
        type: 'fromBasicDetail',
        data: {
          chapterId,
          unitId,
          counts
        }
      }
      this.initSocket('openId', questionOption)
    }
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
