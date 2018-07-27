console.log(module.parent.filename+ "  调用了模块  ======")
console.log(module.filename)
const cp=require('child_process')
const mongoose=require('mongoose')
const {resolve}=require('path')
const Movie=mongoose.model('Movie')



// var ps = require('child_process').spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
//   stdio: 'inherit',
//   cwd: srcpath
// });


;(async()=>{
  //trailer-list爬取的是所有电影的标题和海报以及ID
  const script=resolve(__dirname,'../crawler/trailer-list')
  // console.log(process.env.PATH)
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
    console.log("从trailer-list得到的电影信息=",result)
    result.forEach(async item => {
      let movie=await Movie.findOne({
        doubanId:item.doubanId
      })
      if(!movie){
        movie=new Movie(item)
        await movie.save()
        console.log("保存了一条电影信息",item)
      }
    });
  })


})()
