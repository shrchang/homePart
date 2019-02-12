const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    title:"首页",
    index:1
  },
  onLoad: function () {
    
  },
  //跳转到我的页面
  selfBtn: function (options) {
    console.log(1111111)
    wx.switchTab({
      url: '../self/self'
    })
  }
})
