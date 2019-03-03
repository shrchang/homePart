// pages/room/usercomment/comment.js
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
    num: 4,//显示多少个
    one_1: '',//点亮的
    two_1: '',//没有点亮的
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (options) {
      debugger;
      this.setData({
        one_1: this.data.num,
        two_1: 5 - this.data.num
      })
    }
  }
})
