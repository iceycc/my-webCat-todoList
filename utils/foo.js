function say(msg) {
  console.log("hello"+ msg)
}

module.exports = {
  say:say
}

// 传统的commonJS 还支持export.xxx = {} ，但是小程序不支持 只支持 module.exports = {}
// exports.say = function () {
//
// }