const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/data.txt`, 'utf-8');

readStream.on('data', (data) => {
    console.log(data);
})