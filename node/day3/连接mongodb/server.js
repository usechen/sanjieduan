const express = require('express')
const fs = require('fs')
const app = express()

const router = require('./router')
app.use('/home', router)


app.listen(3000)