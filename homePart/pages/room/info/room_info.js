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
    movies: [{
        url: 'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
        index: 1
      },
      {
        url: 'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',
        index: 2
      },
      {
        url: 'http://img6.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
        index: 3
      },
      {
        url: 'http://img1.imgtn.bdimg.com/it/u=2170044603,225501748&fm=26&gp=0.jpg',
        index: 4
      }
    ],
    current: 0,
    roominfo: {
      id: "1",
      roomIcon: "http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg",
      roomName: "暮光之城",
      roomDesc: "可满足5～30人",
      roomAddress: "广州市番禺区外环西路5号",
      roomPrice: "1000",
      distance: "3.5km"
    },
    imageWidth: wx.getSystemInfoSync().windowWidth, //图片宽度 
    mapIcon: "../../images/room/map.png",
    imgUrls: [
      'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperIndex: 3,
    backgroundImge: "http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg",
    currentTab:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function(options) {
      let info = JSON.parse(options.data);
      console.log(info.data);
      this.setData({
        roominfo: info.data
      });
      wx.setNavigationBarTitle({
        title: info.data.roomName
      })
    },
    /**
     * 修改当前索引
     */
    swiperChange: function(e) {
      this.setData({
        imageWidth: wx.getSystemInfoSync().windowWidth,
        current: e.detail.current
      })
    },
    qtccSwiperChange(e) {
      const that = this;
      that.setData({
        swiperIndex: e.detail.current,
        backgroundImge: that.data.imgUrls[e.detail.current]
      })
    },
    //滑动切换
    swiperTab: function (e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
      });
    },
    //点击切换
    clickTab: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    //预览图片,真机要https
    previewImage: function(e){
      const curr = e.detail.current;
      let imgs = this.data.imgUrls;
      wx.previewImage({
        current: this.data.imgUrls[curr],
        urls: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551454776087&di=853dc4de2d9a88ad7e53c16a1de7976d&imgtype=0&src=http%3A%2F%2Fimage2.suning.cn%2Fuimg%2Fshp%2FuserItems%2F146150681447888923_2.jpg',
          'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551454776087&di=853dc4de2d9a88ad7e53c16a1de7976d&imgtype=0&src=http%3A%2F%2Fimage2.suning.cn%2Fuimg%2Fshp%2FuserItems%2F146150681447888923_2.jpg', 'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg',
          'http://img5.imgtn.bdimg.com/it/u=2608786755,3631115388&fm=26&gp=0.jpg',
          'http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg'
        ],
      })
    }
  }
})