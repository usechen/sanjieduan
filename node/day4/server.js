const express = require('express')
const app = express()
const db = require('./db/connet')
const path = require('path')



app.use(express.static(path.join(__dirname, './www')))

const UserRouter = require('./router/user')
// const foodRouter = require('./router/food')
const AdminFoodRouter = require('./router/food')
const AdminFileRouter = require('./router/file')


app.use('/admin', UserRouter)
// app.use('/food', foodRouter)
app.use('/admin/food', AdminFoodRouter)
app.use('/admin/file', AdminFileRouter)


app.listen(3000, function () {
   console.log('Example app listening on port 3000!');
});