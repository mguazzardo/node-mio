var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
 

var server = app.listen(3000, function () {
  ip = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  console.log('Example app listening at http://0.0.0.0' + port);
});
