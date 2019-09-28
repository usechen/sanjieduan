const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/1913', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => {
   console.log('数据库连接不成功')
})
db.once('open', () => {
   console.log('数据库连接成功')
})