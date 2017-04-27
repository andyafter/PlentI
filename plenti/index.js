'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const glob = require('glob');
const path = require('path');
const secret = require('./config/constants');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 5000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
        reply('hello from hapi');
    }
});

server.register({
    register: require('./libs/plugins/skyscannerScraper')
}, (err) => {

    if (err) {
        throw err;
    }else{
        server.start(function () {
            console.log("Hapi Starting!!!");
        });
    }

});

server.start(function () {
    console.log("Hapi Starting!!!");
});
