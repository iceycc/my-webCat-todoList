Page({
  data:{
    text:"demo"
  },
  tapHandler(){
    //
    // wx.navigateTo({
    //   url:'../demo2/demo2'
    // })
    // wx.redirectTo({
    //   url:'../demo2/demo2'
    // })
    // wx.navigateBack()
    wx.navigateBack({
      delta:2 //返回几层  当delta很大时 返回最开始的页面
    })

    wx.navigateTo({})
    wx.navigateBack({})
    wx.redirectTo({})

  },

})