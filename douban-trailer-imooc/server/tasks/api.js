

// http://api.douban.com/v2/movie/subject/1764796
// npm i request -S --registry=https://registry.npm.taobao.org

const rp=require('request-promise-native')
async function fetchMovie(item){
  const url=`http://api.douban.com/v2/movie/subject/${item.doubanId}`
  const res=await rp(url)
  return res
}

;(async()=>{
  let movies=[
    {
      doubanId: '2209573',
      title: '贫民窟的百万富翁',
      rate: 8.5,
      poster:
      'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2434249040.jpg'
    },
    {
      doubanId: '26363254',
      title: '战狼2',
      rate: 7.1,
      poster:
      'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2494701965.jpg'
    }
]
movies.map(async movie=>{
  let movieData=await fetchMovie(movie)
  try{
    movieData=JSON.parse(movieData)
    console.log(movieData.tags)
    console.log(movieData.summary)
  }catch(err){
    console.log(err)
  }
  console.log(movieData)
})

})()



