'use strict';

var FlightController = require('../controllers/flightController.js'),
    Static = require('./static');

exports.endpoints = [
    { method: 'GET', path: '/flight', config: FlightController.getAll },
    { method: 'POST', path: '/flight', config: FlightController.create },
    { method: 'GET', path: '/flight/{flightID}', config: FlightController.getOne},
    { method: 'PUT', path: '/flight/{flightID}', config: FlightController.update},
    { method: 'DELETE', path: '/flight/{flightID}', config: FlightController.remove}
];
