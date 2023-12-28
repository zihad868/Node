const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    const readStream = fs.ReadStream(`${__dirname}/data.txt`, 'utf-8');

    readStream.pipe(res);
})

server.listen(3000);
console.log("server on port 300")