// Q13 HTTP JSON API SERVER
const http = require('http');
const url = require('url');

userReq = (req,res) => {

	let parsedURL = url.parse(req.url, true);
	let date = new Date(parsedURL.query.iso);
	let path = parsedURL.path;

	if (path.indexOf("api/parsetime") >= 0) {
		let time = {
			hour : date.getHours(),
			minute : date.getMinutes(),
			second : date.getSeconds()
		}
		res.writeHead(200, { "Content-type" : "text/html" });
		res.end(JSON.stringify(time));
	} else if (path.indexOf("api/unixtime") >= 0) {
		let time = {
			"unixtime" : date.getTime()
		}
		res.writeHead(200, {"Content-type": "text/html"});
		res.end(JSON.stringify(time));
	}
};

http.createServer(userReq).listen(process.argv[2]);
