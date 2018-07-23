console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
const Koa = require('koa')
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas, initAdmin } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router', 'parcel']
require("events")


// console.log("===========================================")
// // var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
// var printKeyConcatValue = (key, value) => console.log(key + ':' + value);
// R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
// // logs x:1
// // logs y:2



// process.exit(0)


// console.log("===========================================")












const useMiddlewares = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => {console.log("initWith=",initWith);return initWith(app)}
      ),
      require,
      name => {console.log("name=",name);return resolve(__dirname, `./middlewares/${name}`)},

    )
  )(MIDDLEWARES)
}


















connect()
initSchemas()
initAdmin()
const app = new Koa()
useMiddlewares(app)
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
  await next(); // 调用下一个middleware
});
app.listen(4455)
