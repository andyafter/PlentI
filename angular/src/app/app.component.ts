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
        <div class="container">
            <nav class="navbar navbar-dark bg-inverse">
                <ul class="nav navpills" routerLinkActive="active">
                    <li class="nav-item"><a class="nav-link" routerLink="dashboard">Home</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="user">My Profile</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="planlist">Explore</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="plangrid">Exciting Plans</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="map">Map</a></li>
                </ul>
            </nav>
            <router-outlet> </router-outlet>
        </div>
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
            });
        
        this._planService.fetchHoliday()
            .subscribe(holidays => {
            });
        
        this._destinationService.getDestination()
            .subscribe(destination => console.log(destination));
    }
}
