console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)

const views=require('koa-views')
const serve=require('koa-static')
const{resolve}=require('path')

const r=path=>resolve(__dirname,path)

console.log("server/middlewares/prod.js")


export const dev=async app=>{
  app.use(serve(r('../../../dist')))
  app.use(views(r('../../../dist')),{
    extension:'html'
  })

  app.use(async (ctx)=>{
    await ctx.render('index.html')
  })
}
