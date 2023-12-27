const fs = require('fs');

// File Write 
fs.writeFileSync('file.txt', 'Hello Bob. ')
fs.appendFileSync('file.txt', 'How are you Alice?')


// File Read 
// const data = fs.readFileSync('file.txt')
// console.log(data.toString())

fs.readFile('file.txt', (error, data) => {
    console.log(data.toString())
})


console.log(70);