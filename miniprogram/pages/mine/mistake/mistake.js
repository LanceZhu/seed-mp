import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast'

const app = getApp()

const QUESTION_SIZE = 10 // 默认每次请求10个

const { getQuestionHistory } = app.services

Page({
  data: {
    active: 0, // tab
    questionAll: [],
    questionAllCount: null,
    questionError: [],
    questionErrorCount: null,
    loadMore: false,
    questionOptArr: [ // 问题属性 索引对应 active
      {
        active: 0,
        type: 'error',
        page: 1 // 当前请求数据位置
      },
      {
        active: 1,
        type: 'all',
        page: 1
      }
    ]
  },

  // 根据当前 tab 获取问题
  getQuestions: async function (active) {
    const questionOpt = this.data.questionOptArr[active]
    let { type, page } = questionOpt

    const questionHistory = await getQuestionHistory(type, page, QUESTION_SIZE)

    switch (type) {
      case 'error': {
        this.setData({
          questionErrorCount: questionHistory.total,
          questionError: this.data.questionError.concat(questionHistory.questions)
        })
        break
      }
      case 'all': {
        this.setData({
          questionAllCount: questionHistory.total,
          questionAll: this.data.questionAll.concat(questionHistory.questions)
        })
      }
    }

    this.data.questionOptArr[active] = Object.assign({}, questionOpt, {
      page: ++page
    })
  },

  async onTabChange (e) {
    this.setData({
      active: e.detail.index
    })
    // 内容为空时，请求数据
    let questions = []
    switch (this.data.active) {
      case 0: {
        questions = this.data.questionError
        break
      }
      case 1: {
        questions = this.data.questionAll
        break
      }
      default: {}
    }
    if (questions.length === 0) {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })

      await this.getQuestions(this.data.active)

      Toast.clear()
    }
  },

  onLoad: async function (options) {
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    })

    await this.getQuestions(this.data.active)

    Toast.clear()
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: async function () {
    this.setData({
      loadMore: true
    })

    await this.getQuestions(this.data.active)

    this.setData({
      loadMore: false
    })
  },
  onShareAppMessage: function () {
    return {
      title: '碎片时间学编程',
      path: '/pages/main/main'
    }
  }
})
