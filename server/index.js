const Koa=require('koa')
const mongoose=require('mongoose')
const views=require('koa-views') //
const {resolve}=require('path')
const {initSchemas,connect}=require('./database/init')

console.log("index.js666开始运行")
;(async()=>{

  console.log("开始连接")
  await connect()
  console.log("连接成功")
  initSchemas();

  // require('./tasks/movie')
  console.log("api前面api前面api前面api前面api前面api前面api前面api前面")
  require('./tasks/api')
  console.log("api后面api后面api后面api后面api后面api后面api后面api后面")

})()


// sleep(15000)
// throw new Error("在这里停止一下,看看api有没有运行")


console.log("创建koa之前")
const app=new Koa()
console.log("创建koa之后")


app.use(views(resolve(__dirname,'./views'),{
  extension:'pug'
}))

app.use(async(ctx,next)=>{
  await ctx.render('index',{
    you:'Luke',
    me:'Scott'
  })
})
app.listen(4455)






function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
		return;
	    }
}
