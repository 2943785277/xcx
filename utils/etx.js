var loginStatus = true;
Page({
 
  getPromission: function () {
    if (!loginStatus) {
      wx.openSetting({
        success: function (data) {
          if (data) {
            if (data.authSetting["scope.userInfo"] == true) {
              loginStatus = true;
              wx.getUserInfo({
                withCredentials: false,
                success: function (data) {
                  console.info("info");
                  console.info(data.userInfo);
                },
                fail: function () {
                  console.info("2失败返回数据");
                }
              });
            }
          }
        },
        fail: function () {
          console.info("2设置失败返回数据");
        }
      });
    } else {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              withCredentials: false,
              success: function (data) {
                console.info("1成功返回数据");
                console.info(data.userInfo);
              },
              fail: function () {
                console.info("1失败返回数据");
                loginStatus = false;
                // 显示提示弹窗
                wx.showModal({
                  title: '提示标题',
                  content: '提示内容',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    } else if (res.cancel) {
                      wx.openSetting({
                        success: function (data) {
                          if (data) {
                            if (data.authSetting["scope.userInfo"] == true) {
                              loginStatus = true;
                              wx.getUserInfo({
                                withCredentials: false,
                                success: function (data) {
                                  console.info("3成功返回数据");
                                  console.info(data.userInfo);
                                },
                                fail: function () {
                                  console.info("3失败返回数据");
                                }
                              });
                            }
                          }
                        },
                        fail: function () {
                          console.info("设置失败返回数据");
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        },
        fail: function () {
          console.info("登录失败返回数据");
        }
      });
    }
  }
})