'use strict';

const destinationModel = new Schema({
    name: { type: String, required: true },
    country: {type: string },
    info:{ type: string }
});

module.export = mongoose.model('Destination', destinationModel);
