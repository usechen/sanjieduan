const request = require('request')

const fs = require('fs')
let baidu = 'https://www.baidu.com'

request(baidu,(err,res,body) => {
   // console.log(body)
   fs.writeFileSync('./baidu.html',body)
})