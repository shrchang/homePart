const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    title:"首页",
    index:1,
    notice:"会员卡充500送50，充1200送120。",
    rooms:[
      { id: "a", src:"https://f11.baidu.com/it/u=1134393228,653228807&fm=72",text:"大学城轰趴基地a"},
      { id: "b", src: "https://f12.baidu.com/it/u=1647895510,752235079&fm=72", text: "大学城轰趴基地b"},
      { id: "c", src: "https://f12.baidu.com/it/u=1647895510,752235079&fm=72", text: "大学城轰趴基地c" },
      { id: "d", src: "https://f12.baidu.com/it/u=1647895510,752235079&fm=72", text: "大学城轰趴基地d"},
      { id: "e", src: "https://f12.baidu.com/it/u=1647895510,752235079&fm=72", text: "大学城轰趴基地e" }
    ]
  },
  onLoad: function () {
    
  },
  //跳转到我的页面
  selfBtn: function (e) {
    console.log(1111111)
    wx.switchTab({
      url: '../self/self'
    })
  }
})
