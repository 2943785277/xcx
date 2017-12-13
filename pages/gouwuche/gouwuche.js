Page({
  data: {
    iscart: true,
    carts: [
      { id: 1, tit: '美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）', img: 'http://localhost:8080/images/img1.jpg', num: 4, price: 99.00, select: "success", },
      { id: 2, tit: '美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）', img: 'http://localhost:8080/images/img1.jpg', num: 1, price: 88.00, select: "circle", },
    ], //数据  
    count: 0,   //商品数量默认是1  
    total: 0,    //总金额  
    goodsCount: 0, //数量  
    allSelect: 'circle'    // 全选状态，默认全选
    //select_class:'',
  },
  goshopping:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  jiesuan:function(){
    var that = this
    var count = that.data.count //获取数量判断
    if (count == 0){
      return false;
    }else{
      wx.navigateTo({
        url: '../settlement/index',
      })
    }

  },

  //选择
  radio:function(e){
     var that = this
     //得到下标
     var index = e.currentTarget.dataset.index
     console.log(index)
    // //得到选中状态
     var select = e.currentTarget.dataset.select
     console.log(select)
    if (select == "circle") {
      var stype = "success"
    } else {
      var stype = "circle"
    }
    //把新的值给新的数组
    var newList = that.data.carts
    console.log(newList)
    newList[index].select = stype
    //把新的数组传给前台
    that.setData({
      carts: newList
    })
    that.total()
    that.count()
  },

  //全选
  allSelect:function (e) {
    var that = this
    //先判断现在选中没
    var allSelect = e.currentTarget.dataset.select
    var newList = that.data.carts
    if (allSelect == "circle") {
      //先把数组遍历一遍，然后改掉select值
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "success"
      }
      var select = "success"
    } else {
      //取消全选
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "circle"
      }
      var select = "circle"
    }
    that.setData({
      carts: newList,
      allSelect: select
    })
    that.total()
    that.count()
  },

  //加法
  addtion: function (e) {
    var that = this
    //得到下标
    var index = e.currentTarget.dataset.index
    //得到点击的值
    var num = e.currentTarget.dataset.num
    console.log(index + '---' + num)
    //默认99件最多
    if (num < 100) {
      num++
    }
    //把新的值给新的数组
    var newList = that.data.carts
    newList[index].num = num

    //把新的数组传给前台
    that.setData({
      carts: newList
    })
    that.total()
    that.count()
  },

  //减法
  subtraction: function (e) {
    var that = this
    //得到下标
    var index = e.currentTarget.dataset.index
    //得到点击的值
    var num = e.currentTarget.dataset.num
    //把新的值给新的数组
    var newList = that.data.carts
    //当1件时，点击移除
    if (num == 1) {
      wx.showToast({
        title: '最少1件',
        icon: 'success'
      })
    } else {
      num--
      newList[index].num = num
    }

    //把新的数组传给前台
    that.setData({
      carts: newList
    })
    that.total()
    that.count()
  },

  //删除商品
  delGoods:function(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var newlist = that.data.carts
    wx.showModal({
      title: '提示',
      content: '是否删除该商品',
      success: function (res) {
        if (res.confirm) {
          newlist.splice(index, 1)
          that.setData({
            carts: newlist
          })
          that.total()
          that.count()
        }
      }
    })
  },
  //总金额
  total: function () {
    var that = this
    var newlist = that.data.carts
    var total = 0
    for (var i = 0; i < newlist.length; i++) {
      if (newlist[i].select == "success") {
        total += newlist[i].num * newlist[i].price
      }
    }
    that.setData({
      total: total
    })
  },

  //总数量
  count:function(){
    var that = this
    var newlist = that.data.carts
    var count = 0
    for (var i = 0; i < newlist.length; i++) {
      if (newlist[i].select == "success") {
        count += newlist[i].num
      }
    }
    that.setData({
      count: count
    })
  },


  //页面加载
  onLoad: function (options) {
    var that = this
    that.count()
    that.total()
  },


  onShow: function () {
    var that = this;
  },
  onHide: function () {
    
  },









})  
 
