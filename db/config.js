const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(process.env.CONNECTION_URL)
	.then((msg) => console.log('connection successfull'))
	.catch((err) => console.log(err));
