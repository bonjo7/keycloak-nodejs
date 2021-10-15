const express = require('express');
const app = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();

app.get('/nouseraccount', function(req, res){
    res.send("Hello Anonymous");
});
app.get('/user', keycloak.protect('user'), function(req, res){
    res.send("Hello User");
});

app.get('/admin', keycloak.protect('admin'), function(req, res){
    res.send("Hello Admin");
});

app.get('/all-user', keycloak.protect(['user','admin']),  function(req, res){
    res.send("Hello All User");
});

module.exports = app;