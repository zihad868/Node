const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.write(`
        <html>
        <head>
           <title>
              <Server Running>
           </title>
        </head>
        <body>
            <form method='post' action='/process'>
               <input name='input' />
            </form>
        </body>
        </html>
        `);
        res.end();
    }
    else if(req.url === '/process' && req.method === 'POST'){
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        })
        res.write('Submit Success');
        res.end();

        req.on('end', () => {
            console.log("Stream finished")
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody)
        })
    }
    else{
        res.write('Page not found');
        res.end();
    }

})

server.listen(3000)

console.log("Server is running")