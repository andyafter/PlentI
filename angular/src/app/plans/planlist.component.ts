'use strict';

import { Component } from '@angular/core';

import { PlanService } from './services/plan.service';

@Component({
    selector: 'plan-list',
    template: `
        <ul>
            <li> </li>
        </ul>
    `
})

export class PlanListComponent {
    // here choose the top 10 plans
    plans = ["Vancouver", "Shanghai", "San Francisco"];
    
    constructor(private _planService: PlanService){
    }
    
    refreshPlans(){
        this._planService.getPlan()
            .subscribe(plan => console.log(plan))
    }
}
