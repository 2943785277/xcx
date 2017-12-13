// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItem: "",
    list: [
      { id: 1, img: "http://localhost:8080/images/img1.jpg", tit: "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）", price: "29.00", strip: "88", ping: "80%" },
      { id: 1, img: "http://localhost:8080/images/img1.jpg", tit: "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）", price: "29.00", strip: "88", ping: "80%" },
      { id: 1, img: "http://localhost:8080/images/img1.jpg", tit: "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）", price: "29.00", strip: "88", ping: "80%" },
    ],
    nav_color:"ne",
  },
  nav_act: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    var color = that.data.nav_color
    if (color == 'ne'){
      color = 'off'
    }
    if(id == 2){
      if (color == 'on') {
        color = 'off'
      } else if (color == 'off'){
        color = 'on'
      }
      that.setData({
        currentItem: id,
        nav_color: color
      })
    } else if (id != 2){
      that.setData({
        currentItem: id,
        nav_color: 'ne',
      })
    }
    //设置当前样式
   
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

  list_url: (e) => {
    // 获取id
    let id = e.currentTarget.dataset.id
    console.log(id)
    // 跳转页面
    wx.navigateTo({
      //url: '../list/index',
      url: '../goods-detail/goods-detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
  
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