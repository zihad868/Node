const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/data.txt`, 'utf-8');
const writeStream = fs.createWriteStream(`${__dirname}/newText.txt`);

readStream.on('data', (chunk) =>{
    writeStream.write(chunk);
})

// readStream.pipe(writeStream);


