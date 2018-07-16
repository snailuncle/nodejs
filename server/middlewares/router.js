const { resolve } =require('path')
const { Route }= require("../lib/decorator")

export const router=app=>{
  const apiPath=resolve(__dirname,'../routes')
  console.log("app=",app,"\n","apiPath=",apiPath)
  const router=new Route(app,apiPath)
  console.log("server/middlewares/router.js router=",router)
  router.init()
}
