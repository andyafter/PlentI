'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Destination = require('../models/Destination');

exports.getAll = {
    handler: function(request, reply) {
        reply('it worked!!!');
    }
};
