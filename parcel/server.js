console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
const Koa = require('koa')
const { resolve } = require('path')
const serve = require('koa-static')

const app = new Koa()
console.log("parcel/server.js")

app.use(serve(resolve(__dirname, './')))

app.listen(4466)
