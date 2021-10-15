const express = require('express');
var session = require('express-session');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const keycloak = require('./config/keycloak-config.js').initKeycloak();
const testController = require('./controller/routes-controller.js');

const port = process.env.PORT || "3001";

dotenv.config();

var memoryStore = new session.MemoryStore();

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(cors());
app.use(express.json());
app.use(keycloak.middleware());

app.use('/routes', testController);
app.get('/', function(req, res){
   res.send(`Server is up and running on port: ${port}!`);
});

app.listen(port);