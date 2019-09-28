const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   us : {type : String,required : true},
   ps : {type : String,required : true}
})


const model = mongoose.model('users',userSchema)


module.exports = model