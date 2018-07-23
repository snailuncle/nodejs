console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
import React,{Component} from 'react'
console.log("src/components/async_load.js")
export default (loadComponent,placeholder='正在加载中')=>{
  return class AsyncComponent extends Component {
    unmount=false
    constructor(){
      super()
      this.state={
        Child:null
      }
    }

    componentWillUnmount(){
      this.unmount=true
    }

    async componentDidMount(){
      const {default:Child}= await loadComponent()
      if(this.unmount) return
      this.setState({
        Child
      })
    }

    render(){
      const {Child}=this.state
      return (
        Child
          ? <Child {...this.props} />
          :placeholder
      )
    }
  }
}
