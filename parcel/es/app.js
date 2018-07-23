console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
import React from 'react'
console.log("parcel/es/app.js")
const App = ({ name }) => {
  return <div>{name}</div>
}

export default App
