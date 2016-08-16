
var express = require('express')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  ;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


require('./router.js').route(app);
require('./db.js').connect();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
