const requset = require('request')
const fs = require('fs')
const cheerio = require('cheerio')

//  获取网站，返回值body为这个网站的html结构所有标签，是二进制的文件
//  吧网站爬取下来需要用到request这个第三方依赖包
requset('https://www.1024fl.top',(err,res,body) => {
   //  把html的二进制文件转换为字符串格式
   let str = body.toString()
   //  把字符串文件用第三方依赖包cheerio转换成jq的格式，可以使用jq的方法
   const $ = cheerio.load(str)
   //  用jq查找所有的img标签，并且进行循环，index为索引，ele是每个img标签
   $('img').each((index,ele) => {
      //  把每个img标签中的src属性提取出来
      let url = $(ele).attr('src')
      //  对每个img的src进行正则验证，让他格式为https://的格式
      if(!/\https:/.test(url)){
         url = url.replace(/\/{2}/, 'http://')
      }
      //  把这个img的src添加道破一个jpg的文件中，这样就爬取下来每个图片了
      requset(url).pipe(fs.createWriteStream(`./demo${index}.jpg`))
   })
})