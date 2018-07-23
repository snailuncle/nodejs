console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
console.log('这里是hello模块的第一行')
exports.world = function() {
  console.log('Hello World');
}
console.log('这里是hello模块的最后一行')
