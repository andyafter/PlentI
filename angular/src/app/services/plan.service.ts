'use strict';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { AppService } from './app.service'

@Injectable()
export class PlanService{

    constructor(private _http: Http, private _appService: AppService){
        
    }
    
    getPlan(){
        return this._http.get(this._appService.getURL('/plan'))
            .map(response => response.json());
    }

    createPlan(post){
        return this._http.post(this._appService.getURL('/plan'), JSON.stringify(post))
            .map(response => response.json());
    }

    fetchHoliday(){
        var holidayapi = 'https://holidayapi.com/v1/holidays?key=' + this._appService.getHolidayAPIKey() + '&country=SG&year=2017';
        return this._http.get(holidayapi)
            .map(response => response.json());
    }
}
