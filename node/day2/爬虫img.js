const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

//  必须带上http://,这是第一种添加的方式
// let img = 'http://source.qunarzz.com/piao/images/camel_238_180.jpg'
// request(img).pipe(fs.createWriteStream('./demo.jpg'))


fs.readFile('./baidu.html', (err, data) => {
   let string = data.toString()
   const $ = cheerio.load(string)
   $('img').each((index, ele) => {
      let url = $(ele).attr('src')
      const reg1 = /\http:/
      if (!reg1.test(url)) {
         url = url.replace(/\/{2}/, 'http://')
      }
      console.log(url)
      request(url).pipe(fs.createWriteStream(`./demo${index}.jpg`))
   })
})