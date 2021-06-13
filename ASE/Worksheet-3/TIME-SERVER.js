// Q10 TIME SERVER
const net = require('net');
let date = new Date();

const checkFormat = (num) => {
	if (num < 10) {
		return '0' + `${num}`;
	} else {
		return num;
	}
};

let year = date.getFullYear();
let month = checkFormat(date.getMonth() + 1);
let day = checkFormat(date.getDate());
let hour = checkFormat(date.getHours());
let min = checkFormat(date.getMinutes());

let fullDate = `${year}-${month}-${day} ${hour}:${min}\n`;

const server = net.createServer( (socket) => {
	socket.end(fullDate);
});

server.listen(process.argv[2]);
