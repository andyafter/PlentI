'use strict';

var Controller = require('../controllers/destinationController.js'),
    Static = require('./static');

exports.endpoints = [
    { method: 'GET', path: '/user', config: Controller.getAll}, 
];
