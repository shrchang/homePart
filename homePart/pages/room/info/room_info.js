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
    bookedTabData: [], //预约tab数据
    bookedDateData: [], //预约时间数据
    packageData: [], //套餐数据
    priceAmount: 0, //总金额
    calendar: [],
    currentDateTab: 0,
    chooseSize: false,
    animationData: {},
    radioItems: [{
        name: 'USA',
        value: '场地基础套餐',
        disabled: true
      },
      {
        name: 'CHN',
        value: '自助煮饭套餐(+250元)',
        checked: true
      },
      {
        name: 'BRA',
        value: 'KTV套餐(+250元)'
      },
      {
        name: 'JPN',
        value: '烧烤套餐(+300元)'
      },
      {
        name: 'ENG',
        value: '体感游戏套餐(+150元)'
      }
    ],
    article: "我是html内容<br/>nihao, <br/><br/><br/><br/><br/><br/><br/>这个是测试<br/><br/>可以显示了<br/><br/><br/>hehe<b>很好，我变粗了</b >",
    xitem: {
      num: 4, //显示多少个
      one_1: '', //点亮的
      two_1: '', //没有点亮的
    },

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
    swiperIndex: 3,
    backgroundImge: "http://img1.imgtn.bdimg.com/it/u=2975368640,712443329&fm=26&gp=0.jpg",
    currentTab: 0,
    tabFixed: true
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
      this.setData({
        one_1: this.data.num,
        two_1: 5 - this.data.num
      })
      wx.setNavigationBarTitle({
        title: info.data.roomName
      })
      let WxParse = require("../../wxParse/wxParse.js");
      WxParse.wxParse('article', 'html', this.data.article, this, 5);
      this.getBookedTabData();
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
    swiperTab: function(e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
      });
    },
    //点击切换
    clickTab: function(e) {
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
    previewImage: function(e) {
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
    },
    //显示预定页面
    chooseSezi: function(e) {
      // 用that取代this，防止不必要的情况发生
      var that = this;
      // 创建一个动画实例
      var animation = wx.createAnimation({
        // 动画持续时间
        duration: 200,
        // 定义动画效果，当前是匀速
        timingFunction: 'linear'
      })
      // 将该变量赋值给当前动画
      that.animation = animation
      // 先在y轴偏移，然后用step()完成一个动画
      animation.translateY(800).step()
      // 用setData改变当前动画
      that.setData({
        // 通过export()方法导出数据
        animationData: animation.export(),
        // 改变view里面的Wx：if
        chooseSize: true
      })
      // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
      setTimeout(function() {
        animation.translateY(10).step()
        that.setData({
          animationData: animation.export()
        })
      }, 100)
    },
    //隐藏预定页面
    hideModal: function(e) {
      var that = this;
      var animation = wx.createAnimation({
        duration: 0,
        timingFunction: 'linear'
      })
      that.animation = animation
      animation.translateY(10).step()
      that.setData({
        animationData: animation.export()

      })
      setTimeout(function() {
        animation.translateY(10).step()
        that.setData({
          animationData: animation.export(),
          chooseSize: false
        })
      }, 200)
    },
    //点击切换
    clickDateTab: function(e) {
      var that = this;
      if (this.data.currentDateTab === e.currentTarget.dataset.current) {
        return false;
      } else {
        that.setData({
          currentDateTab: e.currentTarget.dataset.current
        })
      }
    },
    //弹出窗状态,阻止页面穿透操作
    stopPageScroll: function() {
      return;
    },
    //每月第一天是星期几
    getFirstDayOfWeek: function(year, month) {
      return new Date(Date.UTC(year, month - 1, 1)).getDay();
    },

    //获取当前月的天数
    getThisMonthDays: function() {
      var date = new Date();
      //将当前月份加1，下移到下一个月
      date.setMonth(date.getMonth() + 1);
      //将当前的日期置为0，
      date.setDate(0);
      //再获取天数即取上个月的最后一天的天数
      var days = date.getDate();
      return days;
    },

    //获取时间tab标签数据
    //未来5天内
    getBookedTabData: function() {
      var week = "今天";
      const date = new Date();
      const cur_year = date.getFullYear();
      const cur_month = date.getMonth() + 1;
      const cur_date = date.getDate();
      const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
      //利用构造函数创建对象tab数据对象
      function calendar(date, week) {
        this.date = cur_month + '-' + date;
        if (date == cur_date) {
          this.week = "今天";
        } else if (date == cur_date + 1) {
          this.week = "明天";
        } else if (date == cur_date + 2) {
          this.week = "后天";
        } else {
          this.week = '星期' + week;
        }
      }

      var that = this;
      //当前月份的天数
      var monthLength = this.getThisMonthDays(cur_year, cur_month)
      //当前月份的第一天是星期几
      var firstWeek = this.getFirstDayOfWeek(cur_year, cur_month)
      var x = firstWeek;
      for (var i = 1; i <= monthLength; i++) {
        //当循环完一周后，初始化再次循环
        if (x > 6) {
          x = 0;
        }
        //创建对象
        that.data.calendar[i] = new calendar(i, [weeks_ch[x]][0])
        x++;
      }

      //5天以内
      var flag = that.data.calendar.splice(cur_date, that.data.calendar.length - cur_date <= 5 ? that.data.calendar.length : 5)
      that.setData({
        bookedTabData: flag
      })
      console.log(JSON.stringify(this.data.bookedTabData));
    },
  }
})