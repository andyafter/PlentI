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
                    <li class="nav-item"><a class="nav-link" routerLink="map">Map</a></li>
                </ul>
            </nav>
            <router-outlet> </router-outlet>

            <h2>Holidays of the year: </h2>
            <ul class='list-group'>
                <li *ngFor='let holiday of holidays  let i = index' 
                    class='list-group-item'>
                    <span class='label label-default label-pill pull-right'>  </span>
                    {{i+1}} - {{holiday.name}} : {{holiday.date | date}}
                </li>
            </ul>
        </div>
    `,
    providers: [ FlightService,
                 PlanService,
                 DestinationService,
                 AppService ]
})

export class AppComponent  {
    name = 'John';
    dates = [];
    holidays = [];
    
    constructor(private _flightService: FlightService,
                private _planService: PlanService,
                private _destinationService: DestinationService){
        
        this._flightService.getFlight()
            .subscribe(flight => {
            });
        
        this._planService.fetchHoliday()
            .subscribe(holidays => {
                for(var key in holidays.holidays){
                    this.dates.push(key);
                    this.holidays.push({
                        date: key,
                        name: holidays.holidays[key][0].name
                    })
                }
            });
        
        this._destinationService.getDestination()
            .subscribe(destination => console.log(destination));
    }
}
