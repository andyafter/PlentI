'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const secret = require('./config/constants');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 5000
});



server.start((err) => {
    if (err) {
        throw err;
    }
    mongoose.connect(dbUrl, {}, (err) => {
        if (err) {
            throw err;
        }
    });
});
