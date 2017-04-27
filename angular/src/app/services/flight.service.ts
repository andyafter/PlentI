'use strict';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { AppService } from './app.service'

@Injectable()
export class FlightService{

    constructor(private _http: Http, private _appService: AppService){
        
    }
    
    getFlight(){
        return this._http.get(this._appService.getURL('/flight'))
            .map(response => response.json());
    }

    createFlight(post){
        return this._http.post(this._appService.getURL('/flight'), JSON.stringify(post))
            .map(response => response.json());
    }
}
