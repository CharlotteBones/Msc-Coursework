// Q7 HTTP CLIENT
const http = require('http');

http.get(process.argv[2], callback = (response) => {
	 response.setEncoding("utf8");
	 response.on("data", console.log);
});
