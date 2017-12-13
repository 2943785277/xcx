
//获取应用实例
//var img = require('../../utils/img');
// import tools from '../../utils/tools.js'
Page({
  data: {
    bannerimg: ['../../images/banner/banner@2x.png', 
              '../../images/banner/banner@2x.png', 
              '../../images/banner/banner@2x.png'
    ],
    data_class: "color",
    menu: [{ img:"http://localhost:8080/images/mune1.png",tit:"京东",id:1},
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 2 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 3 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 4 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 5 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 6 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 7 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 8 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 9 },
      { img: "http://localhost:8080/images/mune1.png", tit: "京东", id: 1 },
    ],

    list:[
      { id: 1, img: "http://localhost:8080/images/img1.jpg", tit: "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）", price: "29.00", strip:"88",ping:"80%"},
      { id: 1, img: "http://localhost:8080/images/img1.jpg", tit: "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）", price: "29.00", strip: "88", ping: "80%" },
      { id: 1, img: "http://localhost:8080/images/img1.jpg", tit: "美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）1200克（荷兰原装进口）", price: "29.00", strip: "88", ping: "80%" },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    scaleToFill: true,
    scrollTop: "0",
    loadingMoreHidden: true,
  },
  onLoad: function () {
  //页面加载 请求数据
  // http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10
    var that = this;
    var url = 'https://135k.zijunxcx.cn/api/goods/lists?bid=7';
    wx.request({
      url: url,
      data:{
        bid:'8',tid:'32',
      },
      method:'POST',
      success: function (res) {
        console.log(res.data)
        //console.log(res.data)
        //console.log(res.data.result.list)

        // that.setData({
        //   list: res.data.result.list,
        //   hidden: true,
        // });
      },
    })
  },
  //上拉加载数据
  loadMore: function (e) {
    var that = this;
    that.setData({
      hasRefesh: true,
    });
    if (!this.data.hasMore) return
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=' + (++that.data.page) + '&ps=10';
    wx.request({
      url: url,
      success: function (res) {
        console.log(res.data.result.list)
        that.setData({
          list: that.data.list.concat(res.data.result.list),
          hidden: true,
          hasRefesh: false,
        });
      },
    })
  },


  menu_url:(e)=>{
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../list/index',
    })
  },

  list_url:(e)=>{
    // 获取id
    let id = e.currentTarget.dataset.id
    console.log(id)
    // 跳转页面
    wx.navigateTo({
      //url: '../list/index',
      url: '../goods-detail/goods-detail?id=' + id,
    })
  },


  // onLoad:function(){
  //   console.log('123')
  //   wx.request({
  //     url: img,
  //     success: function (res) {
  //       console.log(res.data)
  //       // var resData = res.data;
  //       // console.log(resData)     
  //     }
  //   })
  // },

  // onShow: function () {
      
  // },

})
