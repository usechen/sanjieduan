const fs = require('fs')
//  fs操作文件的增删改查和文件夹的增删改查  c(create)u(updtate)r(read)d(del)
//  同步代码会阻断程序的运行，异步代码不会阻断程序的运行
//  查询文件或者文件夹是有返回值得所以除了接受错误信息之外，还要接受返回值

//  文件夹相关

//  创建一个文件夹，比异步代码在方法后面多了一个Sync
// fs.mkdirSync('./hehe')


//  创建文件夹,异步代码必须要有回调函数，如果回调函数的err为null，那么就是成功了
// fs.mkdir('./hehe',(err) => {
//    console.log(err)
// })


//  修改文件夹名字，同步代码
// fs.renameSync('./haha','./hehe')


//  给文件夹改名字，修改,异步代码
// fs.rename('./hehe','./haha',(err) => {
//    console.log(err)
// })


//  查询文件夹，异步
// fs.readdir('../../zuoye',(err,res) => {
//    console.log(err,res)
// })


//  删除文件夹，异步
// fs.rmdir('./hehe',(err) => {
//    console.log(err)
// })



//  文件相关
//  创建文件，异步，也是覆盖式修改文件
// fs.writeFile('./hehe/index.txt','你好',(err) => {
//    console.log(err)
// })


//  查询文件,toString()是为了让他能够输出文字，不是二进制文字
// fs.readFile('./hehe/index.txt',(err,res) => {
//    console.log(err)
//    console.log(res.toString())
// })


//  修改文件，有覆盖式修改和添加,覆盖式修改就是创建文件，直接写内容，这里是累加的写入文件内容
// fs.appendFile('./hehe/index.txt','世界',(err) => {
//    console.log(err)
// })


//  删除文件
// fs.unlink('./hehe/index.txt',(err) => {
//    console.log(err)
// })