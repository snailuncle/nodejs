const puppeteer=require('puppeteer')
const {resolve}=require('path')
const url='https://movie.douban.com/tag/#/?sort=T&range=6,10&tags='
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
  await page.goto(url,{
    waitUntil:'networkidle2'
  })
  await sleep(3000)
  await page.waitForSelector('.more')
  for(let i=0;i<1;i++){
    await sleep(2000)
    await page.screenshot({path: 'example1.png'});
    await page.click('.more')
    await sleep(2000)
    await page.screenshot({path: 'example2.png'});
  }

  // process.on('unhandledRejection', error => {
  //
  //   process.exit(1) // To exit with a 'failure' code
  // });


  const result=await page.evaluate(()=>{
    var $=window.$
    var items=$('.list-wp a')
    var links=[]
    if (items.length>=1){
      items.each((index,item)=>{
        let it=$(item)
        let doubanId=it.find('div').attr('data-id')
        let title=it.find('.title').text()
        let rate=Number(it.find('.rate').text())
        let poster=it.find('img').attr('src').replace('s_ratio','l_ratio')
        links.push({
          doubanId,
          title,
          rate,
          poster
        })
      })
    }
    return links
  })

  browser.close()
  console.log(result)
  process.send({result})
  process.exit(0)
})()


