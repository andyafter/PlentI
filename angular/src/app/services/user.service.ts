'use strict';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { AppService } from './app.services'

@Injectable()
export class UserService{

    constructor(private _http: Http, private _appService: AppService){
        
    }
    
    getUser(){
        return this._http.get(this._appService.getURL('/user'))
            .map(response => response.json());
    }

    createUser(post){
        return this._http.post(this._appService.getURL('/user'), JSON.stringify(post))
            .map(response => response.json());
    }
}
