const puppeteer=require('puppeteer')
const base='https://movie.douban.com/subject/'
const doubanId="10574622"
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





;(async()=>{
  const browser=await puppeteer.launch({
    args:['--no-sandbox'],
    dumpio:false
  })
  const page=await browser.newPage()
  await page.goto(base+doubanId,{
    waitUntil:'networkidle2'
  })
  await sleep(1000)


  // process.on('unhandledRejection', error => {
  //
  //   process.exit(1) // To exit with a 'failure' code
  // });


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
  const data={
    video,
    doubanId,
    cover:result.cover
  }


  browser.close()
  process.send(data)
  process.exit(0)
  // console.log(result)
})()


