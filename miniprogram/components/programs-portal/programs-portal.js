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
  },

  lifetimes: {
    attached: function () {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpToDetail: function (e) {
      const location = e.currentTarget.dataset.location
      wx.navigateTo({
        url: location
      })
    }
  }
})
