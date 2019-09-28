//  引入fs
const fs = require('fs')




function www(folder,deep) {
   
   let info = fs.readdirSync(folder)

   // console.log(info)
   info.forEach((item) => {
      if(!fs.statSync(item).isFile()){
         // console.log('./' + item)
         // fs.readFileSync('./' + item).forEach((item2) => {
         //    console.log(item2)
         // })
         // console.log(fs.readFileSync('./' + item))
         let info2 = fs.readdirSync('./' + item)
         info2.forEach((item2) => {
            console.log(item2)
         })
         // console.log(info2)
      }
      else{
         console.log(item)
      }
   })
}


www('../day1',1)