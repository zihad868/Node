const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Home Page')
        res.end();
    } else if(req.url === '/about'){
        res.write('About Page');
        res.end();
    }else{
        res.write("Page Not Found");
        res.end();
    }
})

server.listen(3000)

console.log("Listening Port 3000")