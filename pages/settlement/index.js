// pages/settlement/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    array: ['京东快递', '顺丰快递', '韵达快递',],
  },

  to_url:()=>{
    wx.navigateTo({
      url: '../address/index',
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  // payOrders() {
  //   wx.requestPayment({
  //     timeStamp: 'String1',
  //     nonceStr: 'String2',
  //     package: 'String3',
  //     signType: 'MD5',
  //     paySign: 'String4',
  //     success: function (res) {
  //       console.log(res)
  //     },
  //     fail: function (res) {
  //       wx.showModal({
  //         title: '支付提示',
  //         content: '<text>',
  //         showCancel: false
  //       })
  //     }
  //   })
  // }
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