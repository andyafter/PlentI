'use strict';

var PlanController = require('../controllers/planController.js'),
    Static = require('./static');

exports.endpoints = [
    { method: 'GET', path: '/plan', config: PlanController.getAll },
    { method: 'POST', path: '/plan', config: PlanController.create },
    { method: 'GET', path: '/plan/{planID}', config: PlanController.getOne},
    { method: 'PUT', path: '/plan/{planID}', config: PlanController.update},
    { method: 'DELETE', path: '/plan/{planID}', config: PlanController.remove}
];
