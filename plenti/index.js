'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const glob = require('glob');
const path = require('path');

const constants = require('./config/constants');
const database = require('./config/database');

const DestinationRoutes = require('./src/plans/routes/destinationRoutes');
const FlightRoutes = require('./src/plans/routes/flightRoutes');

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

server.route(DestinationRoutes.endpoints);
server.route(FlightRoutes.endpoints);

server.start(function () {
    console.log("Hapi Starting!!!");
});
