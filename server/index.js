const Koa=require('koa')
const mongoose=require('mongoose')
const views=require('koa-views')
const {resolve}=require('path')
const {initSchemas,connect}=require('./database/init')

console.log("index.js666开始运行")
;(async()=>{

  console.log("开始连接")
  await connect()
  console.log("连接成功")
  initSchemas();
  const Movie=mongoose.model('Movie')
  const movies=await Movie.find({})
  console.log(movies)
})()

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
