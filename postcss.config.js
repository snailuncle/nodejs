console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
module.exports={
  plugins:[
    require('autoprefixer'),
    require('cssnext')
  ]
}
