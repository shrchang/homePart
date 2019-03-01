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
    ],
    imgUrls: [
      'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg'
    ],
    backgroundImge: "http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg",
    swiperIndex: 3,
  },
  onLoad: function () {
    
  },
  //跳转到我的页面
  selfBtn: function (e) {
    console.log(1111111)
    wx.switchTab({
      url: '../self/self'
    })
  },

  qtccSwiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
      backgroundImge: that.data.imgUrls[e.detail.current]
    })
  },

  //预览图片,真机要https
  previewImage: function (e) {
    const curr = e.detail.current;
    let imgs = this.data.imgUrls;
    wx.navigateTo({
      url: '../room/info/room_info',
    })
  },
})
