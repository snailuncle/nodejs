console.log(module.filename)
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import routes from './routes'
import 'antd/dist/antd.css'
import './assets/common.sass'
console.log("src/app.js")
export default()=>{
  <Switch>
  {
    routes.man(({name,path,exact=true,component})=>(
      <Route path={path} exact={exact} component={component} key={name}
      />
    ))
  }
  </Switch>
}
