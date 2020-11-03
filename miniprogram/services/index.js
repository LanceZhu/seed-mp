const config = require('../config')

const { BASE_URL, localStorage } = config
const { SESSION_KEY } = localStorage

// 登录
// 登录凭证为 Storage 中 openid
const login = async () => {
  try {
    const res = await new Promise((resolve, reject) => {
      wx.login({
        success (res) {
          if (res.code) {
            wx.request({
              url: `${BASE_URL}/login`,
              method: 'POST',
              data: {
                code: res.code
              },
              success (res) {
                resolve(res)
              },
              fail (err) {
                reject(err)
              }
            })
          } else {
            reject(res)
          }
        },
        fail (error) {
          reject(error)
        }
      })
    })
    if (res.data.code !== -1) {
      wx.setStorageSync(SESSION_KEY, res.data.data.openid)
      console.log('login success')
    } else {
      console.error('login error: ', res)
      throw new Error('login error')
    }
  } catch (err) {
    throw new Error(err)
  }
}

// 判断是否登录
const isLogged = () => {
  const openid = wx.getStorageSync(SESSION_KEY)
  return openid !== ''
}

const request = async function (options, needLogin = false) {
  if (needLogin && !isLogged()) {
    await login()
  }
  return new Promise((resolve, reject) => {
    let { header = {} } = options
    if (needLogin) {
      // 添加登录凭证至header
      const openid = wx.getStorageSync(SESSION_KEY)
      header = Object.assign({}, header, { openid })
    }
    const mergedOptions = Object.assign({}, options, { header })
    wx.request({
      ...mergedOptions,
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}

const getQuestionHistory = async function (type = 'all', page = 1, size = 10) {
  let questionHistory = {}
  try {
    const res = await request({
      url: `${BASE_URL}/question-history?type=${type}&page=${page}&size=${size}`
    }, true)
    if (res.data.code !== -1) {
      questionHistory = res.data.questionHistory
    }
    return questionHistory
  } catch (err) {
    throw new Error(err)
  }
}

const feedback = async function (type, title, content) {
  try {
    const res = await request({
      url: `${BASE_URL}/feedback`,
      method: 'POST',
      data: {
        type,
        title,
        content
      }
    }, true)
    if (res.data.code !== -1) {
      return res.data.feedback
    }
  } catch (err) {
    throw new Error(err)
  }
}

const getLearning = async (name, chapter) => {
  try {
    const res = await request({
      url: `${BASE_URL}/learning?chapter=${chapter}&name=${name}`
    })
    if (res.data.code !== -1) {
      return res.data.data.content
    } else {
      return ''
    }
  } catch (err) {
    throw new Error(err)
  }
}

const getPrograms = async () => {
  try {
    const res = await request({
      url: `${BASE_URL}/programs`
    })
    if (res.data.code !== -1) {
      return res.data.data.programs
    } else {
      return []
    }
  } catch (err) {
    throw new Error(err)
  }
}

const getProgram = async (id) => {
  try {
    const res = await request({
      url: `${BASE_URL}/programs/${id}`
    })
    if (res.data.code !== -1) {
      return res.data.data.program
    } else {
      return {}
    }
  } catch (err) {
    throw new Error(err)
  }
}

// 绑定用户信息

const bindUserInfo = async userInfo => {
  return await request({
    url: `${BASE_URL}/user`,
    method: 'POST',
    data: {
      userInfo
    }
  }, true)
}

module.exports = {
  request,
  isLogged,
  login,
  getQuestionHistory,
  feedback,
  getLearning,
  getPrograms,
  getProgram,
  bindUserInfo
}
