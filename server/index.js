const Koa = require('koa')
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas, initAdmin } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router', 'parcel']

require("events")

console.log("server/index.js")

// const main = ctx => {
//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page</a>';
//   } else {
//     ctx.response.body = 'Hello World';
//   }
// };




const useMiddlewares = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      name => resolve(__dirname, `./middlewares/${name}`)
    )
  )(MIDDLEWARES)
}

// ;(async () => {
//   await connect()
//   initSchemas()
//   await initAdmin()
//   const app = new Koa()
//   await useMiddlewares(app)

//   // console.log("ctx.request.path=",ctx.request.path)

//   // console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL

//   app.listen(4455)

//   await next();
// })()



console.log("server/index.js 网站的起点")

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


