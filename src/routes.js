console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
import AC from './components/async_load'
console.log("src/routes.js")
export default [
  {
    name:'首页',
    icon:'home',
    path:'/',
    component:AC(()=>import ('./views/home'))
  },
  {
    name:'详情页',
    path:'/detail/:id',
    component:AC(()=>import ('./views/movie/detail'))
  }
]
