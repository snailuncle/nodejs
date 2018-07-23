console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
const { resolve } =require('path')
const { Route }= require("../lib/decorator")
export const router=app=>{
  const apiPath=resolve(__dirname,'../routes')
  const router=new Route(app,apiPath)
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

