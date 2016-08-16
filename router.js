
var perf = require('./controllers/performanceController.js');

exports.route = function(app){
	
	app.get('/',function(req,res){
		res.redirect('/main.html');
		res.end();
	});
		
	app.get('/perfs', perf.list);
	app.post('/perfs', perf.create);


	//app.put('/forums/:id', forum.comment);
	//app.del('/forums/:id', function(req,res){
	//});
	
	
};