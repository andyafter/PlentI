'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationModel = new Schema({
    name: { type: String, required: true, unique: true },
    countryName: {type: String, default: '' },
    info:{ type: String, default: '' }
});

module.exports = mongoose.model('Destination', destinationModel);
