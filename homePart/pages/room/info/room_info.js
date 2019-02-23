// pages/room/info/room_info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      movies: [
        { url: 'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg', index:1},
        { url: 'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',index:2},
        { url: 'http://img6.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',index:3},
        { url: 'http://img1.imgtn.bdimg.com/it/u=2170044603,225501748&fm=26&gp=0.jpg',index:4}
      ], 
    current:0,
    roominfo: {
      id: "1",
      roomIcon: "http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg",
      roomName: "暮光之城",
      roomDesc: "可满足5～30人",
      roomAddress: "广州市番禺区外环西路5号",
      roomPrice: "1000",
      distance:"3.5km"
    },
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度 
    mapIcon: "../../images/room/map.png"
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (options) {
      console.log(options.data);
      let info = JSON.parse(options.data);
      console.log(info);
      this.setData({roominfo:info});
    },
    /**
     * 修改当前索引
     */
    swiperChange:function(e){
      this.setData({ current: e.detail.current});
      this.setData({
        imageWidth: wx.getSystemInfoSync().windowWidth})
    }
  }
})
