'use strict';

import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PlanService } from '../services/plan.service';

@Component({
    selector: 'plan-list',
    template: `
        <div class='list-group'>
            <button *ngFor='let plan of plans  let i = index' 
                (click)='viewPlan(plan)'
                class='list-group-item'>
                <span class='label label-default label-pill pull-right'>  </span>
                {{i+1}} - {{plan.name}}
            </button>
        </div>
    `
})

export class PlanListComponent {
    // here choose the top 10 plans
    plans = [
        {
            name: 'Vancouver',
            id: '1'
        },
        {
            name: 'Singapore',
            id: '2'
        },
        {
            name: 'San Francisco',
            id: '3'
        }
    ];
    
    constructor(private _planService: PlanService,
                private _router: Router){
    }
    
    refreshPlans(){
        this._planService.getPlan()
            .subscribe(plan => {
            })
    }

    viewPlan(plan){
        console.log(plan);
        this._router.navigate(['/plan', plan.id]);
    }
}
