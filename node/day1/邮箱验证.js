//  引入nodemailer
const nodemailer = require('nodemailer');


//  创建一个ajax
let transporter = nodemailer.createTransport({
   host: 'smtp.qq.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
      user: '1902783331@qq.com', // generated ethereal user
      pass: 'qxhyedibzwblbabc' // generated ethereal password
   }
})

let info = {
   from: '"Fred Foo 👻" <1902783331@qq.com>', // sender address
   to: '1902783331@qq.com', // list of receivers
   subject: 'Hello 强哥', // Subject line
   // text: 'Hello world?', // plain text body
   html: '<h1>就不告诉我儿啊强</h1>' // html body
}

transporter.sendMail(info,(err,res) => {
   console.log(err,res)
})

