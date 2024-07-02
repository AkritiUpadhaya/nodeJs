const {createReadStream}= require('fs')
const stream= createReadStream('./day-2/content/bigtext.txt')
stream.on('data',(result)=>{
console.log(result)
})