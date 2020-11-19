var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
var ip = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server = app.listen(port, function () {
  //port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  console.log('Example app listening at http://' +ip+ '/' + port);
});
