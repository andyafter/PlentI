'use strict';

var DestinationController = require('../controllers/destinationController.js'),
    Static = require('./static');

exports.endpoints = [
    { method: 'GET', path: '/destination', config: DestinationController.getAll },
    { method: 'POST', path: '/destination', config: DestinationController.create },
    { method: 'GET', path: '/destination/{name}', config: DestinationController.getOne},
    { method: 'PUT', path: '/destination/{name}', config: DestinationController.update},
    { method: 'DELETE', path: '/destination/{name}', config: DestinationController.remove}
];
