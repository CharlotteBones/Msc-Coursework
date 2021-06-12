// Q4 MY FIRST ASYNC IO
const fs = require('fs');
let newlines = 0;

function newlineCount() {
    fs.readFile(process.argv[2], function(err, data){
    newlines = data.toString().split('\n').length - 1;
	  console.log(newlines);
    });
};
