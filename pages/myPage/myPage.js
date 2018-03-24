const foo = require('../../utils/foo.js')
const app = getApp()
Page({
  // 为界面提供数据
  // data就是界面和逻辑之间的桥梁
  data:{
    title:"王冰洋",
    objs:["1","2"],
    viewClassName:"color-red"
  },

  onLoad:function(){
    console.log("onload")
    console.log(getCurrentPages());
    app.foo()
    foo.say("王冰洋")
  }
})