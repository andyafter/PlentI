import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shared/dashboard.component';

import { FlightService } from './services/flight.service';
import { AppService } from './services/app.service';
import { PlanService } from './services/plan.service';
import { DestinationService } from './services/destination.service';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
<router-outlet> </router-outlet>`,
    providers: [ FlightService,
                 PlanService,
                 DestinationService,
                 AppService ]
})

export class AppComponent  {

    name = 'Angular';
    constructor(private _flightService: FlightService,
                private _planService: PlanService,
                private _destinationService: DestinationService){
        
        this._flightService.getFlight()
            .subscribe(flight => console.log(flight));
        this._planService.getPlan()
            .subscribe(plan => console.log(plan));
        this._destinationService.getDestination()
            .subscribe(destination => console.log(destination));
    }
}
