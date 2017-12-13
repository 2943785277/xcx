//app.js
//var common = require('utils/api');

App({
  onLoad: function (e) {
    console.log("qwewqr")
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    wx: wx.login({
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }, fail: function (res) {
          wx.getSetting({
            success(res) {
              if (!res.authSetting["scope.userInfo"]) {
                wx.openSetting({
                  //重新授权请求用户地址信息
                  success: res => {
                    if (res.authSetting["scope.userInfo"]) {
                      that.getUserInfo(cb);
                    }
                  }
                });
              }
            }
          });
        }
      })
    }
  },


  globalData: {
    userInfo: null
  },

  onShow: function (e) {

    // wx.login({
    //   success: function (res) {
    //     // console.log(res.code);
    //     wx.request({
    //       url: common.getsession,
    //       data: {
    //         wxCode: res.code
    //       },
    //       header: {
    //         'content-type': 'json' // 默认值
    //       },
    //       success: function (res) {
    //         // console.log(res);
    //         var data = res.data;
    //         wx.setStorage({
    //           key: 'sessionId',
    //           data: data,
    //         })
    //         // var openid = data.openid;
    //         wx.getUserInfo({
    //           success: function (res) {
    //             // console.log(res.rawData);
    //             // console.log(res.signature)
    //             var sessionid = wx.getStorage({
    //               key: 'sessionId',
    //             })
    //             wx.request({
    //               url: common.checkUserInfo,
    //               data: {
    //                 rawData: res.rawData,
    //                 signature: res.signature,
    //                 sessionId: sessionid
    //               }, success: function (data) {
    //                 // console.log(data)
    //               }
    //             })
    //             var userInfo = res.userInfo
    //             var openId = userInfo.openId
    //             var nickName = userInfo.nickName
    //             var avatarUrl = userInfo.avatarUrl
    //             var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //             var province = userInfo.province
    //             var city = userInfo.city
    //             var country = userInfo.country
    //             var language = userInfo.language
    //             // var appid = userInfo.watermark.appid
    //             // var timestamp = userInfo.watermark.timestamp
    //             wx.request({
    //               url: common.loginUrl,
    //               data: {
    //                 encryptedData: res.encryptedData,
    //                 iv: res.iv,
    //                 sessionId: data
    //               },
    //               header: {
    //                 'content-type': 'json' // 默认值
    //               },
    //               method: 'get',
    //               success: function (res) {
    //                 var resData = JSON.parse(res.data)
    //                 console.log(resData)
    //                 var wxOpenId = resData.openId

    //                 var wxMaUserInfo = {
    //                   avatarUrl: avatarUrl,
    //                   city: city,
    //                   country: country,
    //                   gender: gender,
    //                   language: language,
    //                   nickName: nickName,
    //                   province: province,
    //                   watermark: {
    //                     appid: resData.watermark.appid,
    //                     timestamp: resData.watermark.timestamp
    //                   }
    //                 }

    //                 wx.request({
    //                   url: common.createUser + '?wxOpenId=' + wxOpenId,
    //                   data: wxMaUserInfo,
    //                   method: 'post',
    //                 })
    //               },

    //             });

    //           }
    //         })
    //       }
    //     })
    //   }
    // });

  },
  globalData: {
    userInfo: null,
  }

})
