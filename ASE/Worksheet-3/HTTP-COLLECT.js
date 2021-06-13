// Q8 HTTP COLLECT
const http = require('http');
let inputData = '';

http.get(process.argv[2], callback = (response) => {
    response.setEncoding("utf8");
	response.on("data", (data) => {
	    inputData += data;
	});

	response.on("end", () => {
	    console.log(inputData.length);
	 	console.log(inputData);
	});
});
