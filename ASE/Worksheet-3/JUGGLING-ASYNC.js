// Q9 JUGGLING ASYNC
const http = require('http');

let inputData1 = '';
let inputData2 = '';
let inputData3 = '';

http.get(process.argv[2], (response) => {
	response.setEncoding("utf8");
	response.on("data", (data) => {
		inputData1 += data;
	});
	response.on("end", () => {
		console.log(inputData1);
	});

	http.get(process.argv[3], (response) => {
		response.setEncoding("utf8");
		response.on("data", (data) => {
			inputData2 += data;
		});
		response.on("end", () => {
			console.log(inputData2);
		});

		http.get(process.argv[4], (response) => {
			response.setEncoding("utf8");
			response.on("data", (data) => {
				inputData3 += data;
			});
			response.on("end", () => {
				console.log(inputData3);
			});
		});
	});
});
