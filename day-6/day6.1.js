const{readFile, writeFile}= require('fs').promises
const start= async()=>{
    try{
    const first= await readFile('./day-2/content/first.txt','utf-8')
    const second= await readFile('./day-2/content/second.txt','utf-8')
    await writeFile('./day-2/content/third.txt',`here is the fie: ${first} ${second}`)
    console.log(first,second)
    }
    catch(err){
      console.log(err)
    }
}
start()