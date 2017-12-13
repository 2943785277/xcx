//var common = require('../../utils/api')
var cid;
Page({
  data: {
    imgUrls: [
      '../../images/goods-detail/banner1.png',
      '../../images/goods-detail/banner1.png',
      '../../images/goods-detail/banner1.png',
    ],
    detailSrc: [
      '../../images/goods-detail/neirong@2x_01.png',
      '../../images/goods-detail/neirong@2x_02.png',
      '../../images/goods-detail/neirong@2x_03.png',
      '../../images/goods-detail/neirong@2x_05.png',
      '../../images/goods-detail/neirong@2x_12.png',
      '../../images/goods-detail/neirong@2x_14.png',
      '../../images/goods-detail/neirong@2x_15.png',
      '../../images/goods-detail/neirong@2x_16.png',
      '../../images/goods-detail/neirong@2x_17.png',
      '../../images/goods-detail/neirong@2x_18.png',
      '../../images/goods-detail/neirong@2x_19.png',
      '../../images/goods-detail/neirong@2x_20.png',
      '../../images/goods-detail/neirong@2x_22.png',
      '../../images/goods-detail/neirong@2x_24.png'
    ],
    gouwucheUrl: ['../../images/goods-detail/gouwuche1.png'],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    scaleToFill: true,
    num: 1,    //加减商品的数量
    //minusStatus: 'disabled',
    //plusStatus:"",
    detail_price: '10',         //价格
    detail_title: '【秋季】赛加价哦啊二监区期间诶骄傲你傲娇地啊哦哦IQ我家穷巨阿萨德萨达 阿萨德企鹅群无太过分和个分号发生的顺丰速递斯蒂芬斯蒂芬第三方发生的第三方数度额偶去啊打',  //标题
    detail_num: '10',   //库存
    key: ['红色', '蓝色', '绿色', '红色', '蓝色', '绿色', '红色', '蓝色', '绿色', '红色', '蓝色', '绿色'],        //所有颜色存入key
    // id: 0,       //默认选择第一个颜色的产品
    shopCarInfo: {},
    total:"",      //总价
    goodsid:1,
  },
  //点击改变选择商品颜色的样式
  changeColor1: function (e) {
    cid = e.currentTarget.dataset.id
    console.log(cid)
    this.setData({
      colorId: cid,
    })

  },

  //连接评论页面
  to_comment:function(){
    console.log('123')
    wx.navigateTo({
      url: '../comment/index', 
    })
  },


  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    var detail_price = this.data.detail_price
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }

    if (num <= 1){
      wx.showToast({
        title: '数量最小为1',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    //var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      total: num * detail_price
      //minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    var detail_num = this.data.detail_num
    var detail_price = this.data.detail_price
    // 自增1

    
    if (num >= detail_num) {
      wx.showToast({
        title: '数量已超出库存',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }else{
      num++;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    //var plusStatus = num > 5 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      total: num * detail_price
     // plusStatus: plusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  //右上角购物车icon跳转页面
  //switchTab跳转到tabBar页面
  jumpImg: function (e) {
    wx.switchTab({
      url: '../gouwuche/gouwuche',
    })

  },
  alert:()=>{
    try {
      var value = wx.getStorageSync('key1')
      if (value) {
        for(var i=0;i<=value.length;i++){
          console.log(value[i].name)  
        };
        //var ad = value.length
        
      }
    } catch (e) {
      // Do something when catch error
    }
  },

  // 加入购物车事件
  addShopCar: function (e) {

    if (cid == undefined || null) {
      wx.showToast({
        title: '请您选择一个颜色',
        icon: 'success'
      })
    } else {
      //写入同步缓存
      // var arr = [{ id: '1', name: "hua" }, { id: '2', name: "hua2" }]
      // try {
      //   wx.setStorageSync('key1', arr)
      //   console.log("写入成功")
      // } catch (e) {
      //   console.log("写入失败")
      // }





      wx.showToast({
        title: '添加成功',
        icon: 'success'
      });

      this.setData({
        gouwucheUrl: ['../../images/goods-detail/gouwuche2.png'],
        // num: num
      })
    }


  },
  //立即购买按钮事件
  buyNow: function () {
    // if (cid == undefined || null) {
    //   wx.showToast({
    //     title: '请您选择一个颜色',
    //     image: "../../images/tabBar/gouwuche1.png"
    //   })
    // } else {
    wx.navigateTo({
        url: '../settlement/index',
      })
    //}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var num = this.data.num;
    var detail_price = this.data.detail_price
    this.setData({
      total: num * detail_price
      //minusStatus: minusStatus
    });
    var id = options.id
    var that = this

    // wx.request({
    //   url: common.getitemskuitem,
    //   data: { itemid: id },
    //   header: {
    //     'content-type': 'json' // 默认值
    //   },
    //   method: 'get',
    //   success: function (res) {
    //     console.log(res.data)
    //     var a = res.data.data[0].itemSkus
    //     var attr = []
    //     var cart = []    //商品数据
    //     cart.push(res.data)
    //     console.log(cart)
    //     wx.setStorage({
    //       key: 'cart',
    //       data: cart,
    //     })
    //     for (var i = 0; i < a.length; i++) {
    //       var detail_colorNote2 = res.data.data[0].itemSkus[i].value[0].note
    //       attr.push(detail_colorNote2)
    //     }
    //     var data = res.data.data[0]
    //     that.setData({
    //       detail_title: data.title,
    //       detail_price: data.price,
    //       detail_num: "5",//data.num,
    //       //key: attr,

    //     })

    //   },

    // })

  },


})

