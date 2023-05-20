const mongoose = require("mongoose");

require('dotenv').config();
(async() => {
	try {
		await mongoose.connect("mongodb+srv://abh1sh3k:su%25LA%24ineg65@production-cluster-mumb.zzi5bq5.mongodb.net/")
		console.log("Connection Established")
	}
	catch(e) {
		console.log(`There was error in connecting with database.`, e);
	}
})();
