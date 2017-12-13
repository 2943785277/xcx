// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iscart:true,
    thumb: '',
    nickname: '',
    scrollTop:0,
    currentItem: '',    //当行样式
    list:[
      { id: 1, price: "100", da: "d", data: "201710.10-2017.12.11", state: "0", txt: "仪迷你智能按摩器全身经络便携按摩仪仪迷你智能按摩器全仪迷你智能按摩器全身经络便携按摩仪仪迷你智能按摩器全身经络便携按摩仪身经络便携按摩仪", amount:"10"},
      { id: 2, price: "300", da: "d", data: "201710.10-2017.12.11", state: "3", txt: "仪迷你智能按摩器全身经络便携按摩仪仪迷你智能按摩器全仪迷你智能按摩器全身经络便携按摩仪仪迷你智能按摩器全身经络便携按摩仪身经络便携按摩仪", amount: "990" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  to_comment:(e)=>{
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../reply/index',
    })
    //console.log(id)
  },
  onLoad: function (options) {
    this.setData({
      currentItem: options.id
    });


    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
  },
  // 菜单添加点击样式请求数据
  nav_act: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      currentItem: id
    })
    //请求数据
    // wx.request({
    //   url: 'test.php?id=' + id, //
    //   data: {

    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})