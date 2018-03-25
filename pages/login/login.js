/*
* 1 设计数据元结构 (data属性)
* 2 将数据绑定到特定的元素上
* 3 登陆按钮的点击事件（具体的登陆逻辑）
* */

Page({
  data:{
    username:"",
    password:""
  },
  /*todo 抽离公共函数 inputChange
  * 小程序事件不支持自定义传入的参数 得借助dataset
  * */
  inputChangeHandle(e){
    let prop = e.target.dataset.prop
    // let prop = e.target.dataset["prop"]
    let changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },
  usernameChangeHandle(e){
    this.setData({
      username:e.detail.value,
    })
  },
  passwordChanegHandle(e){
    this.setData({
      password:e.detail.value,
    })
  },
  // 用于处理登陆按钮的点击事件
  doLogin(e){
    // todo： 完成逻辑
    //1、要先知道用户输入了什么内容
    // console.log(this.data)
    console.log(e.detail.value)// 获取form表单提交的所有表达元素的value的集合对象
    //2、根据用户输入的值判断
    //3、根据判断结果做出响应
  }
})