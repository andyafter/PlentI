'use strict';

var Mongoose = require('mongoose'),
    config = require('./constants');

Mongoose.connect(config.MongoURL);
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

module.exports.Mongoose = Mongoose;
module.exports.database = db;
