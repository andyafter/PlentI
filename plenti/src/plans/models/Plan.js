'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planModel = new Schema({
    // flight and destination should be mapped to real flight and destination model
    planID: { type: String, required: true },
    destination: { type: String, required: true },
    startDate: { type: String, required: true },
    backDate: {type: String, required: true },
    flight: {type: String, required: true }
});

module.exports = mongoose.model('Plan', planModel);
