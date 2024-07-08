const http= require('http')
const server= http.createServer((req,res)=>{
    // console.log(req.method)
    const url= req.url
    if(url=='/'){
        res.writeHead(200, {'content-type':'text/html'})
    // console.log('user hit the server')
    res.write('<h1>home page</h1>')
    res.end()
    }
    else if(url=='/about'){
        res.writeHead(200, {'content-type':'text/html'})
        // console.log('user hit the server')
        res.write('<h1>About page</h1>')
        res.end()
    }
 else{
    res.writeHead(404, {'content-type':'text/html'})
    // console.log('user hit the server')
    res.write('<h1>Page not found</h1>')
    res.end()
 }
   
})
server.listen(5000)