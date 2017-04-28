import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shared/dashboard.component';

import { FlightService } from './services/flight.service';
import { AppService } from './services/app.service';
import { PlanService } from './services/plan.service';
import { DestinationService } from './services/destination.service';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
            <div class="container">
                <a class="navbar-brand">Angular Router</a>
                <ul class="nav navbar-nav" routerLinkActive="active">
                    <li class="nav-item"><a class="nav-link" routerLink="dashboard">Home</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="user">My Profile</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="plan">Explore</a></li>
                </ul>
            </div>
        </nav>
        <router-outlet> </router-outlet>
    `,
    providers: [ FlightService,
                 PlanService,
                 DestinationService,
                 AppService ]
})

export class AppComponent  {

    name = 'John';
    constructor(private _flightService: FlightService,
                private _planService: PlanService,
                private _destinationService: DestinationService){
        
        this._flightService.getFlight()
            .subscribe(flight => {
                console.log(flight);
            });
        
        this._planService.getPlan()
            .subscribe(plan => console.log(plan));
        this._destinationService.getDestination()
            .subscribe(destination => console.log(destination));
    }
}
