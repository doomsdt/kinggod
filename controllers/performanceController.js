
var mongoose = require('mongoose');
var Performance = require('../models/performances.js');
var perfCnt = mongoose.model('perfCnt',{idx:Number});


//Creates new forum.
//Give auto-increment number to forum.
exports.create = function(req,res){
	var perf = new Performance(req.body.perf);
	//perf.order = data.idx;
	perf.save();


}
//-----------------------------------

//Find all forums and return sorted.
exports.list = function(req,res){
	Performance.find({}).sort({order:1}).exec(function(err, docs){
		res.status(200).json(docs);
	});
}
//---------------------------------

