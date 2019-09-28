const express = require('express')
const fs = require('fs')
const app = express()
const body = require('body-parser')
app.use(body.urlencoded({ extended: false }))
app.use(body.json())



const homeRouter = require('./router')

app.use('/home',homeRouter)

app.listen(3000)