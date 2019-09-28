const express = require('express');
const router = express.Router();
const mail = require('../utils/mail')
const userModel = require('../db/model/userModel')
let bianliang = {}

// 在用户输入他的邮箱的时候就判断他这个邮箱有没有注册，从前端发起一个请求，
//  如果这个账号注册过，是能够在数据库中查询到的，
//  find的查询结果是一个数组，
router.get('/checkMail',(req,res) => {
   let {us} = req.query
   //  用promise来解决异步回调
   userModel.find({us})
   .then((data) => {
      if(!data.length){
         res.send({ err: 0, msg: '邮箱可用' })
      }
      else{
         res.send({ err: -1, msg: '邮箱已占用' })
      }
   })
   .catch((err) => {
      console.log(err, 'no ok')
   })
})


//  邮箱可以使用，发送验证码进行验证注册
router.get('/sendMail',(req,res) => {
   //  获取输入的邮箱
   let {us} = req.query
   //  生成一个四位的随机数
   let code = parseInt(Math.random() * 10000)
   bianliang[us] = code
   //  调用发送邮件，给这个邮箱发送一个验证码，在点击注册时候使用
   mail.send(us,code)
   .then(() => {
      res.send({ err: 0, msg: '发送成功 ok' })
      console.log(bianliang)
   })
   .catch((err) =>{
      console.log(err)
      res.send({ err: -1, msg: '发送不成功 ok' })
   })
})



//  注册接口，添加middleware拦截器
router.get('/reg',(req,res,next) => {
   //  middleware拦截器，如果和后边差不多，但是如果不执行next()，下边的代码不执行
   let {us,code} = req.query
   if(Number(code) === Number(bianliang[us])){
      next()
   }
   else{
      res.send({ err: -1, msg: '验证码错误' })
   }
},(req,res) => {
   let {us,ps} = req.query
   userModel.insertMany({us,ps})
   .then((data) => {
      res.send({ err: 0, msg: '注册成功' })
   })
   .catch((err) => {
      res.send({ err: -1, msg: '注册失败' })
   })
})



// 登录接口，判断输入的账号密码是否正确
router.get('/login', (req, res) => {
   let {us,ps} = req.query
   // console.log(ps.toString())
   ps = ps - 0
   userModel.findOne({us,ps})
   .then((data) => {
      console.log(data)
      if(data){
         res.send({ err: 0, msg: '登录成功' })
      }
      else{
         res.send({ err: -1, msg: '账号或密码不正确' })
      }
   })
   .catch()
});



module.exports = router;