const requset = require('request')
const fs = require('fs')
const cheerio = require('cheerio')


requset('https://www.1024fl.top/?cate=6',(err,res,body) => {
   // console.log(err,res,body)
   let str = body.toString()
   const $ = cheerio.load(str)
   $('img').each((index,ele) => {
      let url = $(ele).attr('src')
      if(!/\https:/.test(url)){
         url = url.replace(/\/{2}/, 'http://')
      }
      requset(url).pipe(fs.createWriteStream(`./demo${index}.jpg`))
   })
})