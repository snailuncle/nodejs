// console.log(module.parent.filename+ "  调用了模块  ======")
// console.log(module.filename)
const mongoose=require('mongoose')
const Movie=mongoose.model('Movie')
const Category=mongoose.model('Category')
const rp=require('request-promise-native')

async function fetchMovie(item){

  const url=`http://api.douban.com/v2/movie/${item.doubanId}`

  const res=await rp(url)
  let body
  try{
    body=JSON.parse(res)
  }catch(err){
    console.log(err)
  }
  return body
}

;(async()=>{
//   let movies=[
//     {
//       doubanId: '2209573',
//       title: '贫民窟的百万富翁',
//       rate: 8.5,
//       poster:
//       'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2434249040.jpg'
//     },
//     {
//       doubanId: '26363254',
//       title: '战狼2',
//       rate: 7.1,
//       poster:
//       'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2494701965.jpg'
//     }
// ]
  let movies=await Movie.find({
    $or:[
      {summary:{$exists:false}},  //总结 summary
      {summary:null},
      {year:{$exists:false}},
      {title:''},
      {summary:''}
    ]
  })

  for(let i=0;i<movies.length;i++){
  // for(let i=0;i<[movies[0]].length;i++){
    let movie=movies[i]
    console.log("movie=",movie)
    let movieData=await fetchMovie(movie)
    if(movieData){
      let tags=movieData.tags || []
      movie.tags=movie.tags || []
      movie.summary=movieData.summary || ''
      movie.titie=movieData.alt_title || movieData.title || ''
      movie.rawTitle=movieData.title || ''

      if(movieData.attrs){
        movie.movieTypes=movieData.attrs.movie_type || []
        movie.year=movieData.attrs.year[0] || 2500
        for(let i=0;i<movie.movieTypes.length;i++){
          let item=movie.movieTypes[i]
          let cat = await Category.findOne({
            name:item
          })
          if(!cat){
            cat = new Category({
              name:item,
              movies:[movie._id]
            })
          }else{
            if(cat.movies.indexOf(movie._id)===-1){
              cat.movies.push(movie._id)
            }
          }
          await cat.save()
          if(!movie.Category){
            movie.category.push(cat._id)
          }else{
            if(movie.category.indexOf(cat._id)===-1){
              movie.category.push(cat._id)
            }
          }
        }




        let dates=movieData.attrs.pubdate || []
        let pubdates=[]
        dates.map(item=>{
          if(item && item.split('(').length>0){
            let parts=item.split('(')
            let date=parts[0]
            let country='未知'
            if(parts[1]){
              country=parts[1].split(')')[0]
            }
            pubdates.push({
              date:new Date(date),
              country
            })
          }
        })
        movie.pubdate=pubdates



      }
      tags.forEach(tag=>{
        movie.tags.push(tag.name)
      })
      await movie.save()

    }
  }

})()



