console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
import React,{Component} from 'react'

export default class Home extends Component {
  render (){
    return (
    <div>首页</div>
  )
}
}
