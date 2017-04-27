'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Destination = require('../models/Destination');

exports.getAll = {
    handler: function(request, reply) {
        Destination.find({}, function(err, destination) {
            if (!err) {
                reply(destination);
            } else {
                reply(Boom.badImplementation(err)); 
            }
        });
    }
};

exports.getOne = {
    handler: function(request, reply) {
        Destination.findOne({
            'name': request.params.name
        }, function(err, destination) {
            if (!err) {
                reply(destination);
            } else {
                reply(Boom.badImplementation(err));
            }
        });
    }
};

exports.create = {
    validate: {
        payload: {
            name: Joi.string().required(),
            countryName: Joi.string().allow('').optional(), 
            info: Joi.string().allow('').optional()
        }
    },
    handler: function(request, reply) {
        var destination = new Destination(request.payload);
        destination.save(function(err, destination) {
            if (!err) {
                reply(destination).created('/destination/' + destination._id); 
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("please provide another destination, it already exist"));
                } else reply(Boom.forbidden(getErrorMessageFrom(err)));
            }
        });
    }
};

exports.update = {
    validate: {
        payload: {
            name: Joi.string().required(),
            countryName: Joi.string().allow('').optional(), 
            info: Joi.string().allow('').optional()
        }
    },
    handler: function(request, reply) {
        Destination.findOne({
            'name': request.params.name
        }, function(err, destination) {
            if (!err) {
                destination.name = request.payload.name;
                destination.countryName = request.payload.countryName;
                destination.info = request.payload.info;
                destination.save(function(err, destination) {
                    if (!err) {
                        reply(destination); 
                    } else {
                        if (11000 === err.code || 11001 === err.code) {
                            reply(Boom.forbidden("please provide another destination name, it already exist"));
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
        Destination.findOne({
            'name': request.params.name
        }, function(err, destination) {
            if (!err && destination) {
                destination.remove();
                reply({
                    message: "Destination deleted successfully"
                });
            } else if (!err) {
                // Couldn't find the object.
                reply(Boom.notFound());
            } else {
                reply(Boom.badRequest("Could not delete destination"));
            }
        });
    }
};
