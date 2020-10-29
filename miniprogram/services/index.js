const config = require('../config')

const { BASE_URL } = config

// 登录
const login = async ({ userInfo }) => {
  return new Promise((resolve, reject) => {
    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: `${BASE_URL}/login`,
            method: 'POST',
            data: {
              code: res.code,
              userInfo
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
}

const request = {
  login
}

module.exports = {
  request
}
