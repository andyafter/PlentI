'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    private _url = 'http://localhost:5000';

    getURL(url): string {
        return this._url + url;
    }
}
