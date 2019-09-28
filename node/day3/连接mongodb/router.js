const experess = require('express')
const router = experess.Router()


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1913', { useNewUrlParser: true });


const db = mongoose.connection;
db.on('error',(err) => {
   console.log('连接失败' + err)
});
db.once('open',() => {
   console.log('连接成功')
});

var UserSchema = mongoose.Schema({
   us : String,
   ps : String,
});


//  和数据库的某一个集合进行关联
var User = mongoose.model('users', UserSchema);

// User.find({ $and: [{us:"wang1"},{ps:123}]})
// .then((data) => {
//    console.log(data)
// })
// .catch(() => {
//    console.log('出错了')
// })



router.get('/login',(req,res) => {
   console.log('kaishile')
   let {us,ps} = req.query
   User.find({ $and: [{ us: us } ,{ps : ps}]})
   .then((data) => {
      console.log(data)
   })
   .catch(() => {
      console.log('出错了')
   })
   console.log(ps)
   res.send('denglu')
})

// router.post('/reg',(req,res) => {

// })

module.exports = router