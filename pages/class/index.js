// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_left: [{ tit: "衣服1", id: 0 }, { tit: "衣服2", id: 1 }, { tit: "衣服3", id: 2 }, { tit: "衣服4", id: 3 }, { tit: "衣服4", id: 4 },
      { tit: "衣5服", id: 5 }, { tit: "1衣服", id: 6 }, { tit: "衣13服", id: 7 }, { tit: "衣服1", id: 8 }, { tit: "衣服123", id: 9 },
    
    ],
    scrollLeft: "0",
    loadingMoreHidden: true,
    currentItem: "",
  },
  list_url: function (e) {
    console.log("-----------------")
    // 获取id
    var id = e.currentTarget.dataset.id
    console.log(id)
    // 跳转页面
    wx.navigateTo({
      url: '../list/index',
    })
  },

  // 菜单添加点击样式请求数据
  nav_url: function (e) {
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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