//index.js
//获取应用实例
var tcity = require("../../utils/city.js");
var inof = false;
var user1;     //姓名
var mobile;   //电话
var city;     //城市
var textarea; //信息
var code;     //邮编
var app = getApp()
Page({
  data: {
    region: ['0', '0', '0'],
    regiontxt: ['北京市', '北京市', '东城区'],
    index: 0,
    condition: false
  },
  
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      regiontxt: e.detail.value
    })
  },

  //加载
  onLoad:function(){

  },

  //提交
  sub: function (e){
    var that = this
    var user = e.detail.value.user
    var mobile = e.detail.value.mobile
    var city = e.detail.value.citya
    var textarea = e.detail.value.textarea
    var code = e.detail.value.code
    console.log(city)
    if (!that.judge(user, '姓名不能为空') || !that.judge(mobile, '电话不能为空') || !that.judge(code, '邮箱不能为空')) {
      
    }
  },

  //判断
  judge:function(o,j){


    
    if (o == null || o == '') {
      wx.showToast({ 
        title: j,
        icon: 'success'
      })
      console.log(inof)
      return false
    }else{
      
    }
    return true
  },








})
