const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
   name: { type: String, required: true },
   price: { type: Number, default: 0 }, //age 字段有数据按照数据来 没有数据 默认0
   imgPath: { type: String, required: true },   //us ps 字段 类型是字符串 必须项
   foodType: { type: String, required: true },
   desc: { type: String, default: '真香' }
})

const model = mongoose.model('foods',foodSchema)

module.exports = model
