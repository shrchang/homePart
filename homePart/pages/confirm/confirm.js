const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    title: "预定确认",
    type: 1,
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '预定确认'  //修改title
    })
  },
})