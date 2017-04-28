'use strict';

import { Component } from '@angular/core';

import { PlanService } from '../services/plan.service';

@Component({
    selector: 'plan-list',
    template: `
        <ul>
            <li *ngFor='let plan of plans  let i = index' (click)='viewPlan(plan)'> 
                {{i+1}} - {{plan}}
            </li>
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
            .subscribe(plan => {
                console.log('here');
                console.log('again');
            })
    }

    viewPlan(plan){
        console.log(plan);
    }
}
