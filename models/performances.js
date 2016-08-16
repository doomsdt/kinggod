/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var performanceSchema = new Schema({
	order : Number,
	title : String,
	genre : String,
	members : [String]
});

module.exports = mongoose.model('Performance', performanceSchema);