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
