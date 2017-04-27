'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationModel = new Schema({
    name: { type: String, required: true },
    country: {type: string },
    info:{ type: string }
});

module.exports = mongoose.model('Destination', destinationModel);
