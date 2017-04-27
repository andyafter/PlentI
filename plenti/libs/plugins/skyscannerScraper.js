'use strict';

const skyscannerScraper = {
    register: function (server, options, next) {
        server.route({
            method: 'GET',
            path: '/fetch-skyscanner',
            handler: function() {
                reply("here ins the skyscannerScraper");
            }
        });
        next();
    }
};

skyscannerScraper.register.attributes = {
    name: 'fetch-skyscanner',
    version: '1.0.0'
};

module.export = skyscannerScraper;
