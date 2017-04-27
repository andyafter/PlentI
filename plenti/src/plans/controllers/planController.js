'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Plan = require('../models/Plan');

exports.getAll = {
    handler: function(request, reply) {
        Plan.find({}, function(err, plan) {
            if (!err) {
                reply(plan);
            } else {
                reply(Boom.badImplementation(err)); 
            }
        });
    }
};

exports.getOne = {
    handler: function(request, reply) {
        Plan.findOne({
            'planID': request.params.planID
        }, function(err, plan) {
            if (!err) {
                reply(plan);
            } else {
                reply(Boom.badImplementation(err));
            }
        });
    }
};

exports.create = {
    validate: {
        payload: {
            planID: Joi.string().required(),
            destination: Joi.string().required(),
            startDate: Joi.string().required(),
            backDate: Joi.string().required(),
            flight: Joi.string().required()
        }
    },
    handler: function(request, reply) {
        var plan = new Plan(request.payload);
        plan.save(function(err, plan) {
            if (!err) {
                reply(plan).created('/plan/' + plan._id); 
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("please provide another plan, it already exist"));
                } else reply(Boom.forbidden(getErrorMessageFrom(err)));
            }
        });
    }
};

exports.update = {
    validate: {
        payload: {
            planID: Joi.string().required(),
            destination: Joi.string().required(),
            startDate: Joi.string().required(),
            backDate: Joi.string().required(),
            flight: Joi.string().required()
        }
    },
    handler: function(request, reply) {
        Plan.findOne({
            'planID': request.params.planID
        }, function(err, plan) {
            if (!err) {
                plan.planID = request.payload.planID;
                plan.destination = request.payload.destination;
                plan.startDate = request.payload.startDate;
                plan.backDate = request.payload.backDate;
                plan.flight = request.payload.flight;
                plan.save(function(err, plan) {
                    if (!err) {
                        reply(plan); 
                    } else {
                        if (11000 === err.code || 11001 === err.code) {
                            reply(Boom.forbidden("please provide another plan name, it already exist"));
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
        Plan.findOne({
            'planID': request.params.planID
        }, function(err, plan) {
            if (!err && plan) {
                plan.remove();
                reply({
                    message: "Plan deleted successfully"
                });
            } else if (!err) {
                // Couldn't find the object.
                reply(Boom.notFound());
            } else {
                reply(Boom.badRequest("Could not delete plan"));
            }
        });
    }
};
