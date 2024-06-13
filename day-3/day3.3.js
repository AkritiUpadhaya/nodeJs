const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=='/'){
        res.end("welcome")
    }
    if(req.url=='/about'){
        res.end("home page")
    }
    res.end(
        '<h>opps we cannot find the page</h>'
    )
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
