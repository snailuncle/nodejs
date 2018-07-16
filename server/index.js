const Koa=require('koa')
const mongoose=require('mongoose')
const views=require('koa-views') //
const {resolve}=require('path')
const {initSchemas,connect}=require('./database/init')
const R=require('ramda')
const MIDDLEWARES=['router']
// const router=require('./routes')

const useMiddlewares=(app)=>{
  console.log("app=",app)
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith=>initWith(app)
      ),
      require,
      name=>resolve(__dirname,`./middlewares/${name}`)
    )
  )(MIDDLEWARES)
}


console.log("index.js666开始运行")
;(async()=>{

  console.log("开始连接")
  await connect()
  console.log("连接成功")
  console.log("开始初始化schema")
  initSchemas();
  console.log("结束初始化schema")

  // require('./tasks/movie')
  console.log("api前面api前面api前面api前面api前面api前面api前面api前面")
  require('./tasks/api')
  console.log("api后面api后面api后面api后面api后面api后面api后面api后面")


  const app=new Koa()
  await useMiddlewares(app)
  app.listen(4455)

})()


// sleep(15000)
// throw new Error("在这里停止一下,看看api有没有运行")


// console.log("创建koa之前")
// console.log("创建koa之后")
// console.log(resolve(__dirname,'./views'))
// console.log("(views('D:/nodejsDouban/nodejs/nodejsHelloWorld/douban/server/views',{  extension:'pug'}))=",app.use(()=>{}))








// start()


// (views('D:/nodejsDouban/nodejs/nodejsHelloWorld/douban/server/views',{  extension:'pug'}))



//路由
// app
//   .use(router.routes())
//   .use(router.allowedMethods())



// app.use(views(resolve(__dirname,'./views'),{
//   extension:'pug'
// }))


// // //-----------------------------------------------------------------
// // process.exit()
// // //-----------------------------------------------------------------

// app.use(async(ctx,next)=>{
//   await ctx.render('index',{
//     you:'Luke',
//     me:'Scott'
//   })
// })

//-----------------------------------------------------------------
// process.exit()
//-----------------------------------------------------------------




function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
		return;
	    }
}
