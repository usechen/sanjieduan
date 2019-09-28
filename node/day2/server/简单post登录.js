const ex = require('express')
const app = ex()
const bodyParser = require('body-parser')
//  这是一个绝对路径，只要涉及到路径，最好使用绝对路径
const path = require('path')
//  这个是一个form的数据类型使用
app.use(bodyParser.urlencoded({ extended: false }))
//  这个是json数据类型使用
app.use(bodyParser.json())

//  指向静态资源目录
app.use(ex.static(path.join(__dirname,'./www')))

app.post('/login',(req,res) => {
   console.log(req.body)
})

app.listen(3000)