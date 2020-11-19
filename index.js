var express = require('express');
var app = express();

const port = 8080


app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

app.listen(port, () => {

    console.log(`Server listening on the port::::::${port}`);

});


