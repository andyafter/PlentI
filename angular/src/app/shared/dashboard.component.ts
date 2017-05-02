import { Component } from '@angular/core';
import { PlanService } from '../services/plan.service';
import { DestinationService } from '../services/destination.service';
import { FlightService } from '../services/flight.service';

@Component({
    selector: 'dashboard',
    template: `
        <div class='row'>
            <div class='col-6'>
                <h2>Holidays of the year: </h2>
                <ul class='list-group'>
                    <li *ngFor='let holiday of holidays  let i = index' 
                        class='list-group-item'>
                        <span class='label label-default label-pill pull-right'>  </span>
                        {{i+1}} - {{holiday.name}} : {{holiday.date | date}}
                    </li>
                </ul>
            </div>

            <div class='col-3'>
                <div class="card card-inverse card-primary mb-3 text-center">
                  <div class="card-block" (click)='updatePlans()'>
                    <blockquote class="card-blockquote">
                    <h3 class="card-title">Holidays</h3>
                    <p class="card-text">
                    You have {{suitableHolidays}} suitable time slots for holidays.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </blockquote>
                  </div>
                </div>

                <div class="card card-inverse card-primary mb-3 text-center">
                  <div class="card-block">
                    <blockquote class="card-blockquote">
                    <h3 class="card-title">Destinations</h3>
                    <p class="card-text">
                    There are {{totalDestinations}} places waiting for you to visit.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </blockquote>
                  </div>
                </div>
            </div>

            <div class='col-3'>
                <div class="card card-inverse card-primary mb-3 text-center">
                  <div class="card-block">
                    <blockquote class="card-blockquote">
                    <h3 class="card-title">Plans</h3>
                    <p class="card-text">
                    Checkout {{totalPlans}} travel plans we have prepared for you.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </blockquote>
                  </div>
                </div>

                <div class="card card-inverse card-primary mb-3 text-center">
                  <div class="card-block">
                    <blockquote class="card-blockquote">
                    <h3 class="card-title">Cheap Flights</h3>
                    <p class="card-text">
                    You can go travel with lowest cost of {{cheapestFlight}} USD.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </blockquote>
                  </div>
                </div>

            </div>
        </div>
    `
})

export class DashboardComponent {
    name = 'Dashboard';
    dates = [];
    holidays = [];
    plans = [];
    flights = [];

    longestHoliday = 0;
    planIndex = [];
    
    suitableHolidays = 10;
    totalPlans = 20;
    totalDestinations = 0;
    cheapestFlight = 340;

    selectedLocations = [
        { name: 'Bali', countryName: 'Indonisia', info: '' },
        { name: 'Paris', countryName: 'France', info: '' },
        { name: 'Vancouver', countryName: 'Canada', info: '' },
        { name: 'Tokyo', countryName: 'Japan', info: '' },
        { name: 'San Francisco', countryName: 'USA', info: '' },
        { name: 'Dubai', countryName: 'United Arab Emirates', info: '' },
        { name: 'Warsaw', countryName: 'Poland', info: '' },
        { name: 'Munich', countryName: 'Germany', info: '' },
        { name: 'Casablanca', countryName: 'Morocco', info: '' },
        { name: 'Rio de Janeiro', countryName: 'Brazil', info: '' },
        { name: 'Sydney', countryName: 'Australia', info: '' }
    ];

    constructor(private _planService: PlanService,
                private _destinationService: DestinationService){
        var start = new Date('2017-01-01');
        var yearDay = [];
        for(var _i = 0; _i < 365; _i++){
            yearDay[_i] = 0;
        }
        
        this._planService.fetchHoliday()
            .subscribe(holidays => {
                for(var key in holidays.holidays){
                    var day = new Date(key);
                    if(day.getDay() == 3){ // wednesday cannot be attached to a one day break.
                        continue;
                    }
                    this.dates.push(key);
                    this.holidays.push({
                        date: key,
                        name: holidays.holidays[key][0].name
                    })
                }
                
                for(var holiday in this.holidays){
                    var holidayDate = new Date(this.holidays[holiday].date);
                    yearDay[(-start.valueOf() + holidayDate.valueOf())/(24*60*60*1000)] = 1;
                }

                // January 1 2017 is a Sunday
                for(var _i in yearDay){
                    if((+_i % 7 == 0) || ((+_i % 7 == 6))){
                        yearDay[_i] = 1;
                    }
                }

                for(var _i in yearDay){
                    if(+_i >= 362){
                        break;
                    }
                    var total = yearDay[_i] + yearDay[_i+1] + yearDay[_i+2] + yearDay[_i+3];
                    
                    console.log(total.constructor.name);
                    if( total != NaN && total >= 3){
                        if(total == 4){
                            this.longestHoliday = 5;
                            this.planIndex.push(_i);
                        }
                    }
                }

                this.suitableHolidays = this.planIndex.length;
            });
        
        this._destinationService.getDestination()
            .subscribe(response => {
                this.totalDestinations = response.length;
            })
    }

    updateHolidays(){
        for(var city in this.selectedLocations){
            this._destinationService.createDestination(this.selectedLocations[city])
                .subscribe(response => console.log(response));
        }
    }

    updatePlans(){
        this._planService.createPlan({
            planID: '1',
            destination: 'TBD',
            startDate: '2017-01-28',
            backDate: '2017-02-01',
            flight: 'TBD'
        })
            .subscribe(response => console.log(response))
    }

    updateFlights(){
        
    }
    
}
