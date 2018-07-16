const env=process.env.NODE_ENV==='production' ? 'prod' : 'dev'

module.export =require(`./${env}.js`)
