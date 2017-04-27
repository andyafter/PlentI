'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightModel = Schema({
    flightID: { type: String, unique: true },
    flightNumber: { type:String, required: true, default: '' },
    destination: { type: String, required: true, default: '' },
    cost: { type: Number },
    start: { type: String, required: true },
    arrive: { type: String, required: true },
    transition: { type: Number, required: true },
    // total transition time in hours
    transitionTime: {type: Number, required: true },
    description: { type: String, default: ''}
});

module.exports = mongoose.model('Flight', flightModel);

