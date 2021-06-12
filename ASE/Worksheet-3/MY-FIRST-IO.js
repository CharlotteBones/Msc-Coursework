// Q3 MY FIRST IO
const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const newlines = buffer.toString().split('\n').length -1;

console.log(newlines);
