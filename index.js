'use strict';
var mysql = require('mysql');
var express = require('express');
var app = express();

//const port = 8080

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

var app = express();
var port = process.env.PORT || 8080;
var responseStr = "MySQL Data:";

app.get('/',function(req,res){
   
   var mysqlHost = process.env.MYSQL_HOST || 'mariadb';
   var mysqlPort = process.env.MYSQL_PORT || '3306';
   var mysqlUser = process.env.MYSQL_USER || 'user1';
   var mysqlPass = process.env.MYSQL_PASS || 'master';
   var mysqlDB   = process.env.MYSQL_DB   || 'test';

   var connectionOptions = {
     host: mysqlHost,
     port: mysqlPort,
     user: mysqlUser,
     password: mysqlPass,
     database: mysqlDB
   };

//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});
 

app.listen(port, () => {

    console.log(`Server listening on the port::::::${port}`);

});


