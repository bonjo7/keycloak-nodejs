const express = require('express');
const app = express();
const dotenv = require("dotenv");
const testController = require('./controller/routes-controller.js');

dotenv.config();

const port = process.env.PORT || "3000";

app.use('/routes', testController);
app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(port);