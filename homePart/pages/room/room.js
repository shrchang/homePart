const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    title: "场馆",
    rooms:[{
      id:"1",
      roomIcon:"http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg",
      roomName:"暮光之城",
      roomDesc:"可满足5～30人",
      roomAdress:"广州市番禺区外环西路5号",
      roomPrice:"1000"
    },{
      id: "2",
      roomIcon: "http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg",
      roomName: "威廉古堡",
      roomDesc: "可满足5～30人",
      roomAdress: "广州市番禺区外环西路6号",
      roomPrice: "1500"
    },{
        id: "3",
        roomIcon: "http://img1.imgtn.bdimg.com/it/u=2170044603,225501748&fm=26&gp=0.jpg",
        roomName: "梦幻空间",
        roomDesc: "可满足5～30人",
        roomAdress: "广州市番禺区外环西路7号",
        roomPrice: "3000"
    }]
  },
  onLoad: function () {

  },
  toInfoView: function(e){
    let roomInfo = e.currentTarget.dataset['index'];
    roomInfo.roomIcon="";
    let room = {};
    room.data = roomInfo;
    wx.navigateTo({
      url: 'info/room_info?data=' + JSON.stringify(room),
    })
  }
})