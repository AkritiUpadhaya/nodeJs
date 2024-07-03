const {createReadStream}= require('fs')
const stream= createReadStream('./day-2/content/bigtext.txt',{highWaterMark:1000})
stream.on('data',(result)=>{
console.log(result)
})