var express = require('express');
var mysql = require('mysql2');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "",
    database: 'Register'
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
  });

app.get('/', function (req, res) {
    res.send("Welocme to Nodejs!");
    console.log("dddd")
 
});
app.listen(5000);