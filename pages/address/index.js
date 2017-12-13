// pages/address/address.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: '0', name: 'xx', phone: '15022465410', address: 'xx市xx区全额群群', select:'success'},
      { id: '1', name: 'xx', phone: '15022465410', address: 'qq市qq区全额群群', select: 'circle' }
      ],
      
  
  },
  radio: function (e) {
    var that = this
    //得到下标
    var index = e.currentTarget.dataset.index
    // //得到选中状态
    var select = e.currentTarget.dataset.select
    var newList = that.data.list

    //newList.every()
    
    console.log(select)
    if (select == "circle") {
      var stype = "success"
    } else {
      var stype = "circle"
    }
    //把新的值给新的数组
    var newList = that.data.list
    for (var i = 0; i < newList.length;i++){
      newList[i].select ='circle'
    }
    newList[index].select = stype
    //把新的数组传给前台
    console.log(newList)
    that.setData({ 
      list: newList
    })
    wx.showToast({
      title: '设置成功',
      icon:'success'
    })
  },

  //删除地址
  dellist:function(e){
    var that = this
    //得到下标
    var index = e.currentTarget.dataset.index
    // //得到选中状态
    var newlist = that.data.list
    wx.showModal({
      title: '提示',
      content: '是否删除该地址',
      success: function (res) {
        if (res.confirm) {
          newlist.splice(index, 1)
          that.setData({
            list: newlist
          })
        }
      }
    })
  },
 
  edit:()=>{
    wx.navigateTo({
      url: '../address-add/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  addAddess:function(){
    wx.redirectTo({
        url: '../address-add/index',
      })
  },

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