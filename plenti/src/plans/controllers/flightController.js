'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Flight = require('../models/Flight');

exports.getAll = {
    handler: function(request, reply) {
        Flight.find({}, function(err, flight) {
            if (!err) {
                reply(flight);
            } else {
                reply(Boom.badImplementation(err)); 
            }
        });
    }
};

exports.getOne = {
    handler: function(request, reply) {
        Flight.findOne({
            'flightID': request.params.flightID
        }, function(err, flight) {
            if (!err) {
                reply(flight);
            } else {
                reply(Boom.badImplementation(err));
            }
        });
    }
};

exports.create = {
    validate: {
        payload: {
            flightID: Joi.string().required(),
            flightNumber: Joi.string().allow('').optional(), 
            destination: Joi.string().allow('').optional(),
            cost: Joi.number().optional(),
            start: Joi.string().required(),
            arrive: Joi.string().required(),
            transition: Joi.number().required(),
            transitionTime: Joi.number().required(),
            description: Joi.string().allow('').optional()
        }
    },
    handler: function(request, reply) {
        var flight = new Flight(request.payload);
        flight.save(function(err, flight) {
            if (!err) {
                reply(flight).created('/flight/' + flight._id); 
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("please provide another flight, it already exist"));
                } else reply(Boom.forbidden(getErrorMessageFrom(err)));
            }
        });
    }
};

exports.update = {
    validate: {
        payload: {
            flightID: Joi.string().required(),
            flightNumber: Joi.string().allow('').optional(), 
            destination: Joi.string().allow('').optional(),
            cost: Joi.number().optional(),
            start: Joi.string().required(),
            arrive: Joi.string().required(),
            transition: Joi.number().required(),
            transitionTime: Joi.number().required(),
            description: Joi.string().allow('').optional()
        }
    },
    handler: function(request, reply) {
        Flight.findOne({
            'flightID': request.params.flightID
        }, function(err, flight) {
            if (!err) {
                flight.flightID = request.payload.flightID;
                flight.flightNumber = request.payload.flightNumber;
                flight.destination = request.payload.destination;
                flight.cost = request.payload.cost;
                flight.start = request.payload.start;
                flight.arrive = request.payload.arrive;
                flight.transition = request.payload.transition;
                flight.transitionTime = request.payload.transitionTime;
                flight.description = request.payload.description;
                flight.save(function(err, flight) {
                    if (!err) {
                        reply(flight); 
                    } else {
                        if (11000 === err.code || 11001 === err.code) {
                            reply(Boom.forbidden("please provide another flight name, it already exist"));
                        } else reply(Boom.forbidden(getErrorMessageFrom(err))); 
                    }
                });
            } else {
                reply(Boom.badImplementation(err)); 
            }
        });
    }
};


exports.remove = {
    handler: function(request, reply) {
        Flight.findOne({
            'flightID': request.params.flightID
        }, function(err, flight) {
            if (!err && flight) {
                flight.remove();
                reply({
                    message: "Flight deleted successfully"
                });
            } else if (!err) {
                // Couldn't find the object.
                reply(Boom.notFound());
            } else {
                reply(Boom.badRequest("Could not delete flight"));
            }
        });
    }
};
