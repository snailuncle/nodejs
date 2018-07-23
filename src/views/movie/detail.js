console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)

import React,{Component} from 'react'
console.log("src/views/movie/detail.js")
export default class Detail extends Component{
  render(){
    return (
      <div>详情页</div>
    )
  }
}
