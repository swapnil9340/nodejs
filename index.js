var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send("Welocme to Nodejs!");
console.log("dddd")
});
app.listen(5000);