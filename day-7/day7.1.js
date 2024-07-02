const {writeFileSync}= require('fs')
for(let i=0;i<100;i++){
    writeFileSync('./day-2/content/bigtext.txt',`Hello World ${i}\n`, {flag: 'a'})
}
