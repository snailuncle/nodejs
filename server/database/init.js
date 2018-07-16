const mongoose=require('mongoose')
const db='mongodb://localhost/douban-test'
const glob=require('glob')  //glob模仿正则
const {resolve}=require('path')

console.log("database/init.js执行了")
// console.log(resolve(__dirname,'./schema','**/*.js'))
mongoose.Promise=global.Promise

//mongo数据库所有对象的模型的初始化
exports.initSchemas=()=>{
  console.log("database/init.js/initSchemas被调用了")
  console.log("mongo数据库所有对象的模型的初始化开始")
  glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
  console.log("mongo数据库所有对象的模型的初始化结束")
}

exports.connect=()=>{
  console.log("database/init.js/connect被调用了")

  let maxConnectTimes=0
  console.log("maxConnectTimes=",maxConnectTimes)

  return new Promise((resolve,reject)=>{

    if(process.env.NODE_ENV !=="production"){
      mongoose.set('debug',true)
    }

  console.log("mongoose.connect(db)开始")
  console.log('db=',db)
  mongoose.connect(db)
  console.log("mongoose.connect(db)结束")

    mongoose.connection.on('disconnected',()=>{
      console.log("mongoose.connection.on('disconnected")

      maxConnectTimes++;
      if(maxConnectTimes<5){

        mongoose.connect(db)
      }else{
        throw new Error("数据库挂了吧,快去修吧少年")
      }
    })
    mongoose.connection.on('error', err =>{
      console.log("mongoose.connection.on('error")

      maxConnectTimes++;
      if(maxConnectTimes<5){

        mongoose.connect(db)
      }else{
        throw new Error("数据库挂了吧,快去修吧少年")
      }
    })
    mongoose.connection.once('open', () =>{
      console.log("mongoose.connection.once('open'")
      // const Dog=mongoose.model('Dog',{name:String})
      // const doga=new Dog({name:'阿尔法'})
      // doga.save().then(()=>{
      //   console.log('wang')
      // })
      console.log("database/init.js/connect被调用了,第"+maxConnectTimes+"次连接mongo")

      resolve()
      console.log("MongoDB Connected successfully!")
    })
  })




}
