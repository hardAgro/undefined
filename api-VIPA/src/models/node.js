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

const Node = mongoose.model('Node', NodeSchema);

module.exports = Node;