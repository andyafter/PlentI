'use strict';

import { Component } from '@angular/core';

import { PlanService } from '../services/plan.service';

@Component({
    selector: 'plan-list',
    template: `
        <div class='list-group'>
            <button *ngFor='let plan of plans  let i = index' 
                (click)='viewPlan(plan)'
                class='list-group-item'>
                <span class='label label-default label-pill pull-right'>  </span>
                {{i+1}} - {{plan}}
            </button>
        </div>
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
