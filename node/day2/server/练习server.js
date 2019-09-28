//  第三方依赖，express，是用来配置接口的
const express = require('express')
const app = express()
const path = require('path')


//  一个get请求，res是返回给前台的数据，req是前台传入的数据
app.get('/test/login',(req,res) => {
   console.log('get开始了')
   res.send('get你好世界')
})
//  一个post请求，无法直接在浏览器请求，返回的结果必须有一个网页才可以，或者使用postman这个软件
app.post('/test/reg',(req,res) => {
   console.log('post开始')
   res.send('post你好世界')
})



//  配置一个代理，端口号为3333，后边是一个回调函数，可以不写，
app.listen(3333,() => {
   console.log('server start')
})