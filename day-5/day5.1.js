const {readFile}= require('fs')
console.log('started a firt task')
readFile('./day-2/content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completes first task')
})
console.log('starting second task')