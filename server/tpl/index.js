console.log(module.filename)
console.log("server/tpl/index.js")

module.exports={
  normalTpl:require('./html'),
  ejsTpl:require('./ejs'),
  pugTpl:require('./pug')
}
