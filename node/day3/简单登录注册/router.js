//  引入express这个框架依赖包，主要是用来做node服务器
const express = require('express')
//  建立一个路由
const router = express.Router()
//  fs是一个内置模块用来操作文件
const fs = require('fs')
//  path是用来高绝对路径用的
const path = require('path')
//  querystring是一个用来转后端接收的数据，可以在对象和字符串中间进行转换
const qs = require('querystring')



//  获取user.txt的绝对路径
let dir = path.join(__dirname, './user.txt')
//  发起一个get登录请求
router.get('/login',(req,res) => {
   //  获取用户传入的数据，并且用结构对象进行结构
   let {us,ps} = req.query
   //  通过fs查询user.txt这个文件中的数据
   fs.readFile(dir,'utf8',(err,userData) => {
      if(err){
         res.send({err:-3,msg:'内部错误请重试'})
      }
      else{
         //  获取到的是一个字符串，把他用@@@进行分割成一个新的数组，数组的每一项都是一个账号密码的字符串
         let userArr = userData.split('@@@')
         console.log(userArr)
         //  定义一个空的数组，用来存储账号密码
         let DataArr = []
         //  吧userArr这个数组进行遍历，吧字符串转换成一个对象，对象中包括us和ps
         for(let i = 0;i < userArr.length;i++){
            DataArr.push(qs.parse(userArr[i]))
         }
         console.log(DataArr)
         //  定义一个变量为false，
         let state = false
         //  吧dataArr这个数组进行遍历，如果某一个对象的us和ps和用户传进来的数据匹配成功，吧变量变为true并且结束循环
         for(let i = 0;i < DataArr.length;i++){
            if(DataArr[i].us === us && DataArr[i].ps === ps){
               state = true
               break
            }
         }
         //  如果循环结束后，变量是true说明用户登录成功，返回给前端结果成功
         if(state){
            res.send({ err: 0, msg: '登录成功' })
         }
         else{
            res.send({ err: -1, msg: '账号或密码不正确'})
         }
      }
   })
})



//  使用路由来建立一个注册的post请求
router.post('/reg',(req,res) => {
   //  通过结构对象获取用户传进来的us和ps
   let {us,ps} = req.body
   //  吧用户传进来的us和ps转换成添加到user表中的格式
   let str = `@@@${qs.stringify({us,ps})}`
   //  添加到文件中
   try {
      fs.appendFileSync(dir, str)
   } catch (error) {
      return res.send({ err: -1, msg: 'reg nook' })
   }
   res.send({ err: 0, msg: '登录成功' })
})


module.exports = router