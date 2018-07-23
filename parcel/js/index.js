console.log(module.filename)
function changeTitle () {
  window.$('#app').html('Parcel 打包包')
}
console.log("parcel/js/index.js")

setTimeout(function () {
  changeTitle()
}, 2000)
