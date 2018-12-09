const mongoose = require('mongoose');
mongoose.connect(' mongodb://198.199.88.108:27017/noderest',{
	useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
