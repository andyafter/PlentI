'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightModel = Schma({
    flightNumber: { type:String, required: true },
    destination: { type: String, required: true },
    cost: { type: Number },
    start: { type: DateTime, required: true },
    arrive: { type: DateTime, required: true },
    transition: { type: Number, required: true },
    // total transition time in hours
    transitionTime: {type: Number, required: true },
    description: { type: String, default: ''}
});

module.exports = mongoose.model('Flight', flightModel);

