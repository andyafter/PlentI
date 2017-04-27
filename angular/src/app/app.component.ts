import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shared/dashboard.component';

import { FlightService } from './services/flight.service'
import { AppService } from './services/app.services'

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
<router-outlet> </router-outlet>`,
    providers: [ FlightService,
                 AppService ]
})

export class AppComponent  {

    name = 'Angular';
    constructor(private _flightService: FlightService){
    }
}
