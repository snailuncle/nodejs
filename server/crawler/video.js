// console.log(module.parent.filename+ "  调用了模块  ======")
// console.log(module.filename)

// 这个杀手不太冷=https://movie.douban.com/subject/1295644/
// 这个杀手不太冷  视频地址=https://movie.douban.com/trailer/108757/#content

// 肖申克的救赎    视频地址=https://movie.douban.com/trailer/108756/#content

const {resolve}=require('path')
const puppeteer=require('puppeteer')
const base='https://movie.douban.com/subject/'
const doubanId="1295644"

const videoBase=`https://movie.douban.com/trailer/108756`

const sleep=time=>new Promise(resolve=>{
  setTimeout(resolve,time)
})


// ;(async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   await page.screenshot({path: 'example.png'});

//   await browser.close();
//   await process.exit(1)
// })();





var chromePath=resolve(__dirname,'./chromium/chrome.exe')

;(async()=>{
  // console.log("当前目录=",__dirname)
  const browser=await puppeteer.launch({
    // executablePath: 'D:/nodejsDouban/nodejs/nodejsHelloWorld/douban/server/crawler/chromium/chrome.exe',
    // executablePath: './chromium/chrome.exe',
    executablePath: chromePath,
    headless: false,
    args:['--no-sandbox'],
    dumpio:false
  })
  const page=await browser.newPage()
  console.log("将跳转到的地址=",base+doubanId)
  await page.goto(base+doubanId,{
    waitUntil:'networkidle2'
  })
  await sleep(1000)


  // process.on('unhandledRejection', error => {
  //
  //   process.exit(1) // To exit with a 'failure' code
  // });

//爬取电影链接和封面图
  const result=await page.evaluate(()=>{
    var $=window.$
    var it=$('.related-pic-video')
    if(it && it.length>0){
      var link=it.attr('href')
      var cover=it.attr('style')
      // var cover=it.find('img').attr('src')
      return {
        link,
        cover
      }
    }
    return {}
  })
  //继续爬视频
  let video
  if(result.link){
    await page.goto(result.link,{
      waitUntil:'networkidle2',
    })
    await sleep(2000)
    video = await page.evaluate(()=>{
      var $=window.$
      var it=$('source')
      if (it && it.length>0){
        return it.attr('src')
      }
      return ''
    })
  }

  // const data={
  //   video:video,
  //   doubanId:doubanId,
  //   cover:result.cover
  // }


  // 'background-image:url(https://img1.doubanio.com/img/trailer/medium/1433855508.jpg?)' }
  // console.log(str1.match(/http.*\.(?:\jpg|png)/)[0]);
  let coverMatch=result.cover.match(/http.*\.(?:\jpg|png)/)
  if(coverMatch){
    result.cover=coverMatch[0]
  }

  const data={
    video,
    doubanId,
    cover:result.cover
  }


  browser.close()
  process.send(data)
  process.exit(0)
  // console.log("result=",data)
})()


