console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'
import App from './app'
// console.log("App=",App)
const rootElement=document.getElementById('app')
render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,rootElement
)
