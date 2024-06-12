// asynchronous approach

const {readFile, writeFile}= require('fs')
readFile('./day-2/content/first.txt', 'utf-8',(err, result)=>{
    if(err){
         console.log("error has occured",err)
         return
    }
    console.log(result)
})