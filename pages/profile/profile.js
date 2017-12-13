
Page({
  data: {
    thumb: '',
    nickname: '',
    uid:'',
    utime:'',
    orders: [],
  },

  //订单地址
  order_url:(e)=>{
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../order/index?id='+id,
    })
  },

  onLoad() {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })

    /**
     * 发起请求获取订单列表信息
     */
    // wx.request({
    //   url: '',
    //   success(res) {
    //     self.setData({
    //       orders: res.data
    //     })
    //   }
    // })
  },
  onShow() {
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    // wx.getStorage({
    //   key: 'address',
    //   success: function (res) {
    //     self.setData({
    //       hasAddress: true,
    //       address: res.data
    //     })
    //   }
    // })
  },
  /**
   * 发起支付请求
   */
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
})