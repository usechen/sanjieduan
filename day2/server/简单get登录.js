const ex = require('express')
const app = ex()

//  一个简单的get登录的接口
app.get('/test/login',(req,res) => {
   let data = req.query
   if(data.us === 'chen' && data.ps === '123'){
      res.send('登录成功')
   }
   else{
      res.send('登录失败')
   }
})


app.listen(3333)