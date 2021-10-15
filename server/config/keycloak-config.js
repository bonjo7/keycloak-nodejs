var session = require('express-session');
var Keycloak = require('keycloak-connect');
const dotenv = require("dotenv");
dotenv.config();

let _keycloak;

var keycloakConfig = {
    clientId: process.env.CLIENT_ID,
    bearerOnly: process.env.BEARER,
    serverUrl: process.env.SERVER_URL,
    realm: process.env.REALM,
    realmPublicKey: process.env.REAL_PUBLIC_KEY,
    credentials: {
        secret: process.env.CLIENT_SECRET
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};