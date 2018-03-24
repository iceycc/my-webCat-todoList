//app.js 全局方法
// 1-小程序不是运行在浏览器 所以小程序中没用DOM（BOM）对象
console.log(document) // undifine
console.log(window) // undifined
// 2-小程序的j是有一些额外的成员
// App方法  用于定义一个用程序实例对象
// Page方法用于定义页面对象
// getApp 方法 用于获取全局应用程序对象
// getCurrentPages 获取当前页面的调用栈 （数组 最后一个就是当前页面） 最早的在最底下 正在调试多个页面时
// 对象
// wx对象 提供核心api的

// 3- 小程序的js时支持commonJS规范的
// 规定约定文件与文件之间如何协同 模块化

// 4- es6转es5 会有不兼容 要 转换
// ios小程序时运行在JavascriptCore中
// 安卓小程序是通过X5内核来解析的
// 开发者工具是运行在 nwjs（chrome内核）中

App({
  // 应用程序启动时执行
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  foo:function(){
    console.log("我是app里定义的方法")
  }
})