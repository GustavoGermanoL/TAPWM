const fs = require('fs');
const data = fs.readFile('file.txt');

console.log(data.toString());