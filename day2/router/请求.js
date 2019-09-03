const express = require('express')
//  引用router这个模块require中引用的应该是路径
const router = require('./admin')
const app = express()
//  引用转换数据类型的body-parser，并且进行配置，只有post请求需要
const bodyParser = require('body-parser')

//  post请求的数据类型还是在配置地方进行
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/admin',router)


app.listen(3000)