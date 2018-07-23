console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
const env=process.env.NODE_ENV==='production' ? 'prod' : 'dev'
console.log("server/middlewares/index.js")

module.exports =require(`./${env}.js`)
