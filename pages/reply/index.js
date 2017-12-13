// pages/reply/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: [],
    type_class:'',
    img_length:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //添加图片
  addimg:function(){
    var that = this
    var img_url = that.data.img_url;    //获取 图片地址集合
    var nem = that.data.img_length - (img_url.length);  //获取 最多张数 - 已上传张数
    console.log(nem)
    if (img_url.length < 5){
      wx.chooseImage({
        count: nem, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var img_url = that.data.img_url.concat(res.tempFilePaths)
          that.setData({
            img_url: img_url
          })
        }
      })
    }
  },

  //删除图片
  delimg: function (event) {
    var that = this;
    var dataid = event.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '是否删除该图片',
      success: function (res) {
        if (res.confirm) {
          that.data.img_url.splice(dataid, 1);
          that.setData({
            img_url: that.data.img_url
          });
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000
          })
        } else{
          
        }
      }
    })
  },


  //预览图片
  previewImage: function (e) {
    var that = this,
      //获取当前图片的下表
      index = e.currentTarget.dataset.index,
      //数据源
      pictures = this.data.img_url;
    //console.log(index + '---' + pictures)
    console.log(pictures)
    var a = pictures[index]
    wx.previewImage({
      //当前显示下表
      current: pictures[index],
      //数据源
      urls: pictures
    })
  },
  inp:function(e){
    var that = this;
    var val = e.detail.value;
    //console.log(val.length)
    if (val.length == 11){
      that.setData({
        type_class:true 
      })
    }else{
      that.setData({
        type_class: false 
      })
    }
  },

  onLoad: function (options) {
  },
  chooseicon: function (e) {

    var strnumber = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = strnumber;
    console.log(_obj)
    this.setData({
      tabArr: _obj
    });

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var pictures = this.data.img_url;
    console.log(pictures)
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