const mongoose = require("mongoose");

require('dotenv').config();
(async() => {
	try {
		await mongoose.connect(process.env.CONN_STRING)
		console.log("Connection Established")
	}
	catch(e) {
		console.log(`There was error in connecting with database.`, e);
	}
})();
