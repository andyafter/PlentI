'use strict';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { AppService } from './app.service'

@Injectable()
export class DestinationService{

    constructor(private _http: Http, private _appService: AppService){
        
    }
    
    getDestination(){
        return this._http.get(this._appService.getURL('/destination'))
            .map(response => response.json());
    }

    createDestination(post){
        return this._http.post(this._appService.getURL('/destination'), JSON.stringify(post))
            .map(response => response.json());
    }
}
