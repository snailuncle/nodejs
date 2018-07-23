console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)

console.log("src/views/home/index.js")

import React,{Component} from 'react'
console.log("src/views/home/index.js 进入home index了")
export default class Home extends Component{
  render(){
    return (
      <div>首页</div>
    )
  }
}
