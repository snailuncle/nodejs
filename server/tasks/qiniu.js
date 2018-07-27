// console.log(module.parent.filename+ "  调用了模块  ======")
// console.log(module.filename)

// 华北 1 可用区 C
// 47.104.211.172(公)

// 172.31.118.111(私有)



// www.xiaoxinfeng.com.cn.qiniudns.com
// www.xiaoxinfeng.com.cn.qiniudns.com
//————http上传,指定zone的具体区域——
//Zone.zone0:华东
//Zone.zone1:华北
//Zone.zone2:华南
//Zone.zoneNa0:北美
//———http上传，自动识别上传区域——
//Zone.httpAutoZone
//———https上传，自动识别上传区域——
//Zone.httpsAutoZone

// Configuration config = new Configuration.Builder()
//         .chunkSize(256 * 1024)  //分片上传时，每片的大小。 默认256K
//         .putThreshhold(512 * 1024)  // 启用分片上传阀值。默认512K
//         .connectTimeout(10) // 链接超时。默认10秒
//         .responseTimeout(60) // 服务器响应超时。默认60秒
//         .recorder(null)  // recorder分片上传时，已上传片记录器。默认null
//         .recorder(null, null)  // keyGen 分片上传时，生成标识符，用于片记录器区分是那个文件的上传记录
//         .zone(Zone.zone2) // 设置区域，指定不同区域的上传域名、备用域名、备用IP。
//         .build();
// this.uploadManager = new UploadManager(config);

// 存储区域	地域简称	上传域名
// 华东	z0	服务器端上传：http(s)://up.qiniup.com
// 客户端上传： http(s)://upload.qiniup.com
// 华北	z1	服务器端上传：http(s)://up-z1.qiniup.com
// 客户端上传：http(s)://upload-z1.qiniup.com
// 华南	z2	服务器端上传：http(s)://up-z2.qiniup.com
// 客户端上传：http(s)://upload-z2.qiniup.com
// 北美	na0	服务器端上传：http(s)://up-na0.qiniup.com
// 客户端上传：http(s)://upload-na0.qiniup.com
// 东南亚	as0	服务器端上传：http(s)://up-as0.qiniup.com
// 客户端上传：http(s)://upload-as0.qiniup.com

//   location / {
//         root   /usr/share/nginx/html;
//         index  index.html index.htm;
//     }

// { doubanId: '1292052',
//     title: '肖申克的救赎',
//     rate: 9.6,
//     poster:
//      'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p480747492.jpg' },
// { doubanId: '1295644',
//   title: '这个杀手不太冷',
//   rate: 9.4,
//   poster:
//     'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg' },
// { doubanId: '1292720',
//   title: '阿甘正传',
//   rate: 9.4,
//   poster:
//     'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p510876377.jpg' },








// let movies=[{
//   video:'http://vt1.doubanio.com/201806282323/bc9d39b0cd7a699b15353370e28bde4e/view/movie/M/301270263.mp4',
//   doubanId: '10574622',
//   poster:'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p1793720172.jpg',
//   cover:'https://img3.doubanio.com/img/trailer/medium/1805269102.jpg'
// }]

const qiniu=require('qiniu')
const nanoid=require('nanoid')
const config=require('../config')
const bucket=config.qiniu.bucket
const mac=new qiniu.auth.digest.Mac(config.qiniu.AK,config.qiniu.SK)
var configQiniu = new qiniu.conf.Config();
configQiniu.zone = qiniu.zone.Zone_z1;
var client = new qiniu.rs.BucketManager(mac, configQiniu);


// http://iovip.qbox.me/fetch/aHR0cDovL3Z0MS5kb3ViYW5pby5jb20vMjAxODA2MjgyMzIzL2JjOWQzOWIwY2Q3YTY5OWIxNTM1MzM3MGUyOGJkZTRlL3ZpZXcvbW92aWUvTS8zMDEyNzAyNjMubXA0/to/a29hMjpqTnpfSmlVRnZYfkV1RzN5WnBWcXUubXA0
// http://vt1.doubanio.com/201806282323/bc9d39b0cd7a699b15353370e28bde4e/view/movie/M/301270263.mp4

// var options = {
//   scope: config.qiniu.bucket,
// };
// var putPolicy = new qiniu.rs.PutPolicy(options);
// // var uploadToken=putPolicy.uploadToken(mac);
// var client=putPolicy.uploadToken(mac);

const uploadToQiniu=async(url,key)=>{
  return new Promise((resolve,reject)=>{
    client.fetch(url,bucket,key,(err,ret,info)=>{
      // console.log('url=',url)
      // console.log('bucket=',bucket)
      // console.log('key=',key)
      // console.log('err=',err)
      // console.log('ret=',ret)
      // console.log('info=',info)

      if(err){
        reject(err)
      }else{
        if(info.statusCode===200){
          resolve({key})
        }else{
          reject(info)
        }
      }
    })
  })
}


;(async()=>{


// { doubanId: '1295644',
//   title: '这个杀手不太冷',
//   rate: 9.4,
//   poster:
//     'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg' },

// result= { video:
//   'http://vt1.doubanio.com/201807111237/ff7ba42c74781b4d1d830a393b7574b1/view/movie/M/301080757.mp4',
//  doubanId: '1295644',
//  cover:
//   'background-image:url(https://img1.doubanio.com/img/trailer/medium/1433855508.jpg?)' }

let movies=[{
  video:'http://vt1.doubanio.com/201807111237/ff7ba42c74781b4d1d830a393b7574b1/view/movie/M/301080757.mp4',
  doubanId: '1295644',
  poster:'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg',
  cover:'https://img1.doubanio.com/img/trailer/medium/1433855508.jpg'
}]

//nodejs从mongo中提取数据
// let movies=

  movies.map(async movie=>{
    console.log("传输到七牛之前的数据=",movie)
    if(movie.video && !movie.key){
      try{
        console.log('开始传video')
        let videoData=await uploadToQiniu(movie.video,nanoid()+'.mp4')
        console.log('开始传cover')
        let coverData=await uploadToQiniu(movie.cover,nanoid()+'.jpg')
        console.log('开始传poster')
        let posterData=await uploadToQiniu(movie.poster,nanoid()+'.png')
        if(videoData.key){
          movie.videoKey=videoData.key
        }
        if(coverData.key){
          movie.coverKey=coverData.key
        }
        if(posterData.key){
          movie.posterKey=posterData.key
        }
        console.log("传输到七牛之后的数据=",movie)

      //   传输到七牛之前的数据= { video:
      //     'http://vt1.doubanio.com/201807111237/ff7ba42c74781b4d1d830a393b7574b1/view/movie/M/301080757.mp4',
      //    doubanId: '1295644',
      //    poster:
      //     'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg',
      //    cover:
      //     'https://img1.doubanio.com/img/trailer/medium/1433855508.jpg' }
      //  开始传video
      //  开始传cover
      //  开始传poster
      //  传输到七牛之后的数据= { video:
      //     'http://vt1.doubanio.com/201807111237/ff7ba42c74781b4d1d830a393b7574b1/view/movie/M/301080757.mp4',
      //    doubanId: '1295644',
      //    poster:
      //     'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p511118051.jpg',
      //    cover:
      //     'https://img1.doubanio.com/img/trailer/medium/1433855508.jpg',
      //    videoKey: 'CWk3lYDSgRBIozgeh0mU_.mp4',
      //    coverKey: 'MEKhDV_SV1yEwapxlFs_s.jpg',
      //    posterKey: '4Nm0jtWsuBjfq55F1MH26.png' }



      }catch(err){
        console.log(err)
      }
    }
  })




})()




