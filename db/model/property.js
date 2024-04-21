const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	rooms: {
		type: String,
		required: true,
	},
	area: {
		type: String,
		required: true,
	},
	cost: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	}
});

const propertyModel = mongoose.model('Property', propertySchema);
module.exports = propertyModel;
