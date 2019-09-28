const express = require('express')
const router = express.Router()

const foodModel = require('../db/model/foodModel')


//  获取数据，不分页
router.get('/getFood',(req,res) => {
   foodModel.find()
   .then((data) => {
      res.send({ err: 0, msg: '获取信息ok', list: data })
   })
})


//  添加数据
router.get('/setFood',(req,res) => {
   let { name, price, imgPath, foodType, desc} = req.query
   console.log(name, price, imgPath, foodType, desc)
   foodModel.insertMany({ name, price, imgPath, foodType, desc})
   .then((data) => {
      console.log(data)
      res.send({ err: 0, msg: '添加ok' })
   })
})

//  分页和总条数或者分类查询
router.get('/getfoodpage',(req,res) => {
   let page = req.query.page || 1
   let pageSize = req.query.pageSize || 3
   let count = 0
   let foodType = req.query.foodType
   let obj = {}
   if (foodType) { obj.foodType = foodType }
   foodModel.find(obj)
   .then((data) => {
      count = data.length
      return foodModel.find(obj).skip(Number((page - 1) * pageSize)).limit(Number(pageSize))
   })
   .then((data) => {
      res.send({ err: 0, msg: '获取信息ok', list: data, count: count })
   })
})

//  删除信息
router.get('/delfood',(req,res) => {
   let {_id} = req.query
   foodModel.deleteOne({_id})
   .then((data) => {
      res.send({ err: 0, msg: 'del ok' })
   })
})

//  修改信息，
router.get('/updafood',(req,res) => {
   let {_id,name,price,imgPath,foodType,desc} = req.query
   foodModel.updateOne({ _id: _id }, { name, price, imgPath, foodType, desc})
   .then((data) => {
      res.send({ err: 0, msg: '修改完成'})
   })
})


//  关键字查询
router.get('/getfoodB',(req,res) => {
   let page = req.query.page || 1
   let pageSize = req.query.pageSize || 3
   let count = 0
   let {B} = req.query
   let reg = new RegExp(B)
   foodModel.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] })
   .then((data) => {
      count = data.length
      return foodModel.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] }).skip(Number((page - 1) * pageSize)).limit(Number(pageSize))
   })
   .then((data) => {
      res.send({ err: 0, msg: '获取信息ok', list: data, count: count })
   })
})
module.exports = router