// path module
const path= require('path')
console.log(path.sep)
const filepath= path.join('/content','/suncontent/','/text')
console.log(filepath)
const base= path.basename(filepath)
console.log(base)
const absolute= path.resolve(__dirname,'content','subcontent','text')
console.log(absolute)