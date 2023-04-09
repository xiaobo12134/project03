const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname,'./成绩.txt'),'utf8',(err,dataStr)=>{
    if(err){
        console.log('文件读取失败'+err.message)
    }
    fs.writeFile('./成绩ok.txt',dataStr,err=>{
        if(err){
            console.log('文件读取失败'+err.message);
        }
        console.log('文件读取成功')
    })
})