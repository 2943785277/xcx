const basePath = "http://17o197442g.iok.la"

module.exports = {
  loginUrl: basePath + "/miniapi/decodeUserInfo",         //获取用户openId和unionId数据
  getsession: basePath + "/miniapi/getSession",           //获取SessionId
  checkUserInfo: basePath + "/miniapi/checkUserInfo",    //验证用户完整性
  createUser: basePath + "/miniapi/CreateUser",          //授权
  getitemslist: basePath + "/miniapi/item/Getitemslist",   //首页
  getitemskuitem: basePath + "/miniapi/item/Getitemskuitem" //购买页面

};
