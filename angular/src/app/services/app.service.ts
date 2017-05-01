'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    private _url = 'http://localhost:5000';
    private _key = 'na253944576987953962978845952389';
    private _skyscannerapi = 'http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/GB/GBP/en-GB/US/FR/2017-11/2017-12?apiKey=';
    private _holidayapikey = '57f637e2-62c2-4c03-b7b1-1cdd44e5016a';
    
    getURL(url): string {
        return this._url + url;
    }

    getSkyscannerKey(){
        return this._key;
    }

    getSkyscannerAPI(){
        return this._skyscannerapi;
    }

    getHolidayAPIKey(){
        return this._holidayapikey;
    }
}
