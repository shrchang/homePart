const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    title: "我的订单",
    type:1,
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的订单'  //修改title
    })
  },
  clickType:function(e){
    let type=e.currentTarget.dataset.type;
    console.log("type="+type);
    this.setData({type:type});
  }
})