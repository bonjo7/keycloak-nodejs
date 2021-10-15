var express = require('express');
var app = express();
var testController = require('./controller/routes-controller.js');

app.use('/routes', testController);

app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(3000);