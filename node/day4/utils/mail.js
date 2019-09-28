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

module.exports = {
   send(mail,code) {
      let info = {
         from: '"哈哈哈" <1902783331@qq.com>', // sender address
         to: mail, // list of receivers
         subject: 'Hello 强哥', // Subject line
         // text: 'Hello world?', // plain text body
         html: `<h1>你的验证码是:${code}</h1>` // html body
      }
      return new Promise((resolve,reject) => {
         transporter.sendMail(info, (err, res) => {
            if(err){
               reject()
            }
            else{
               resolve()
            }
         })
      })
      
   }
}