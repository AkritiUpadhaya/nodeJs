// FS module
// synchronous approach
const {readFileSync, writeFileSync}= require('fs')
const first = readFileSync('./day-2/content/first.txt', 'utf-8')
const second = readFileSync('./day-2/content/second.txt', 'utf-8')
console.log(first)
console.log(second)
writeFileSync('./day-2/content/result.txt','hello world',{flag:'a'})