'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    private _url = 'http://localhost:5000';
    private _key = 'na253944576987953962978845952389';
    private _skyscannerapi = 'http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/GB/GBP/en-GB/US/FR/2017-11/2017-12?apiKey=';

    getURL(url): string {
        return this._url + url;
    }

    getSkyscannerKey(){
        
    }
}
