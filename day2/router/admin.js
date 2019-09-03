const express = require('express')
//  路由选取公共的，一般是在登录和注册
const router = express.Router()


//  在这里进行页面请求的数据
router.get('/login',(req,res) => {
   console.log(req.body)
   res.send('get 路由成功')
})
router.post('/reg',(req,res) => {
   console.log(req.body)
   res.send('post 路由成功')
})

//  吧router这个模块抛出
module.exports = router