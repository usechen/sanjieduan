const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const multer = require('multer')

router.post('/img',multer().single('hehe'),(req,res) => {
   console.log(req.file)
   // let {butter}
   let { buffer, mimetype, originalname } = req.file
})

module.exports = router