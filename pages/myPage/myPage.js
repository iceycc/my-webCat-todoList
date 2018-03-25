const foo = require('../../utils/foo.js')
const app = getApp()
Page({
  // 为界面提供数据
  // data就是界面和逻辑之间的桥梁
  data:{
    title:"王冰洋",
    objs:["1","2"],
    viewClassName:"color-red",
    todos:[
      {name:"JavaScript",completed:true},
      {name:"HTML",completed:true},
      {name:"CSS",completed:false}
    ],
    item:"做：",
    isShow:true
  },

  onLoad:function(){
    console.log("onload")
    console.log(getCurrentPages());
    app.foo()
    foo.say("王冰洋")
  },
  doTap:function(e){
    console.log(this.data);
    console.dir(e);
    console.log("tap事件触发了")
    // 页面怎么不会不实时改变呢
    // this.data.isShow = false
    this.setData({
      isShow:!this.data.isShow
    })
  }
})