'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const secret = require('./config');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 5000
});

server.register(require('hapi-auth-jwt'), (err) => {

    server.auth.strategy('jwt', 'jwt', {
        key: secret,
        verifyOptions: { algorithms: ['HS256'] }
    });

    // create a new route for all files in src/route
    glob.sync('./src/routes/*.js', {
        root: __dirname
    }).forEach(file => {
        const route = require(path.join(__dirname, file));
        server.route(route);
    });
});

server.start(function(){
    console.log("Server running at:", server.info.uri);
});
