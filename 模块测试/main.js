console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
console.log('导入hello之前')
var hello = require('./hello');
console.log('导入hello之后')

hello.world();
