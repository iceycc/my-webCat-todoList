const app = getApp()

Page({
  data:{
    msg:"ccc"
  },
  tapOuter(){
    console.log("tapOuter")
  },
  tapInner(e){
    // 没有之前停止冒泡的方法
    // console.log(e)
    //js阻止事件冒泡
    //oEvent.cancelBubble = true;
    //oEvent.stopPropagation();
    console.log("tapInner")
  },
  sendDate(e){
    // e.target 当前点击的元素
    // e.target.dataset h5 data-xxx所有自定义属性的集合
    console.log(e.target.dataset)
    // 事件处理函数中的this还是指向页面对象 page
    console.log(this)

  },
  doInput(e){
    // console.log(e)
    // e.detail.value 获取当前input的输入的值
    //this.data.msg = e.detail.value // 可以直接赋值改变data中的数据 但是不会实时在反馈到页面 改变页面数据
    // 所以使用setData进行再设置
    this.setData({
      msg:e.detail.value
    })
    console.log(this.data.msg)
    // this.setData 是用来改变data中的数据的
    // 他与直接赋值的却别在于setData可以通知界面做出变化
    // 直接赋值没有办法实现这一点（早期的js）
  }
})