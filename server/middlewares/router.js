const { resolve } =require('path')
const { Route }= require("../lib/decorator")

export const router=app=>{
  const apiPath=resolve(__dirname,'../routes')
  const router=new Route(app,apiPath)
  console.log("server/middlewares/router.js router=",router)
  router.init()
}



// app: { subdomainOffset: 2, proxy: false, env: 'development ' },
// apiPath:'D:\\nodejsDouban\\nodejs\\nodejsHelloWorld\\douban\\server\\routes',
// router:Router {
//   opts: {},
//   methods:[ 'HEAD', 'OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE' ],
//   params: {},
//   stack: []
//   }

