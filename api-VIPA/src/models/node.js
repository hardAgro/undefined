const mongoose = require('../database');

const NodeSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	}, 
	rps: {
		type: String,
		required: true,
		lowercase: true,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;