// pages/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: 1, name: 'nihao', txt:'赛加价哦啊二监区期间诶骄傲你傲娇地啊哦哦IQ我家穷巨阿萨德萨达赛加价哦啊二监区期间诶骄傲你傲娇地啊哦哦IQ我家穷巨阿萨德萨达赛加价哦啊二监区期间诶骄傲你傲娇地啊哦哦IQ我家穷巨阿萨德萨达',time:'2017-11-11'},
      { id: 2, name: 'nihao', txt: '赛加价哦啊二监区期间诶骄傲你傲娇地啊哦哦IQ我家穷巨阿萨德萨达', time: '2017-11-11' },
      { id: 3, name: 'nihao', txt: '赛加价哦啊二监区期间诶骄傲你傲娇地啊哦哦IQ我家穷巨阿萨德萨达', time: '2017-11-11' }
      ],
    currentItem: '',    //当行样式
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