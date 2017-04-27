'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const glob = require('glob');
const path = require('path');

const constants = require('./config/constants');
const database = require('./config/database');

const DestinationRoutes = require('./src/plans/routes/destinationRoutes');
const FlightRoutes = require('./src/plans/routes/flightRoutes');
const PlanRoutes = require('./src/plans/routes/planRoutes');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 5000,
    routes: { cors: true } 
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
server.route(PlanRoutes.endpoints);

server.start(function () {
    console.log("Hapi Starting!!!");
});
