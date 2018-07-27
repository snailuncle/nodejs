
const { connect, initSchemas} = require('../database/init')
const mongoose=require('mongoose')


// export const getAllMovies=async(type,year)=>{
//   let query={}
//   if(type){
//     query.movieTypes={
//       $in:[type]
//     }
//   }
//   if(year){
//     query.year=year
//   }
//   const movies=await Movie.find(query)
//   return movies
// }
// export const getMovieDetail=async(id)=>{
//   const movie=await Movie.findOne({_id:id})
//   return movie
// }

const sleep=time=>new Promise(resolve=>{
  setTimeout(resolve,time)
})




;(async()=>{
  // await sleep(1000)

  await connect()
  await initSchemas()
  const Movie=mongoose.model('Movie')

  id="1295644"
  cool=Movie.find({id:id})
  console.log("这个杀手不太冷=",cool)

  process.exit(0)
})()
