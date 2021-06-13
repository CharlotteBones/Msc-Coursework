// Q6 MAKE IT MODULAR
module.exports = function (dir, ext, callback) {

	const fs = require('fs');
	const path = require('path');
	let dataList = [];

	fs.readdir(dir, function (err,data) {
		if (err) {
    	    return callback(err);
        }

		for (let i = 0; i < data.length; i++) {
			if (path.extname(data[i]) == "." + ext) {
			 	dataList.push(data[i]);
            }
		}
		callback(null, dataList);
	});
};

// The file
const dir = process.argv[2];
const ext = process.argv[3];
const mymodule = require('./mymodule');

const callback = (err, data) => {

	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
    if (err) {
        return console.error(err);
      }
};
    
mymodule(dir, ext, callback);
