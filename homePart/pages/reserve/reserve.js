const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    title: "订单确认",
    hyChecked:true,
  },
  onLoad: function () {

  },
  selectPayType:function(){
    this.setData({hyChecked:!this.data.hyChecked});
  }
})