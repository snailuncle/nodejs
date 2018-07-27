// console.log(module.parent.filename+ "  调用了模块  ======")
// console.log(module.filename)
// const Koa = require('koa')
// const mongoose = require('mongoose')
// const views = require('koa-views')
// const { resolve } = require('path')
// const { connect, initSchemas, initAdmin } = require('./database/init')
// const R = require('ramda')
// const MIDDLEWARES = ['router', 'parcel']
// require("events")

// const useMiddlewares = (app) => {
//   R.map(
//     R.compose(
//       R.forEachObjIndexed(
//         initWith => {console.log("initWith=",initWith);return initWith(app)}
//       ),
//       require,
//       name => {console.log("name=",name);return resolve(__dirname, `./middlewares/${name}`)},

//     )
//   )(MIDDLEWARES)
// }

// connect()
// initSchemas()
// initAdmin()
// const app = new Koa()
// useMiddlewares(app)
// app.use(async (ctx, next) => {
//   console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
//   await next(); // 调用下一个middleware
// });
// app.listen(4455)






// 下面的是爬取豆瓣电影的代码





const { resolve } = require('path')
const { connect, initSchemas} = require('./database/init')


;(
  async()=>{
    await connect()
    initSchemas()
    require('./tasks/api')
  }
)()



