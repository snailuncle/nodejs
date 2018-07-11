const cp=require('child_process')
const {resolve}=require('path')



// var ps = require('child_process').spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
//   stdio: 'inherit',
//   cwd: srcpath
// });


;(async()=>{
  const script=resolve(__dirname,'../crawler/trailer-list')
  console.log(process.env.PATH)
  const child=cp.fork(script,[])
  let invoked=false
  child.on('error',err=>{
    if(invoked) return
    invoked=true
    console.log(err)
  })
  child.on('exit',code=>{
    if(invoked) return
    invoked=true
    let err=code===0 ? null : new Error('exit code '+code)
    console.log(err)
  })

  child.on('message',data=>{
    let result=data.result
    console.log(result)
  })


})()
