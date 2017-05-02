import { Component } from '@angular/core';

import { PlanService } from '../services/plan.service';

@Component({
    selector: 'plan-grid',
    template: `
        <div class='container-fluid'>
            <div class='row-fluid'>
            <div class='col-md-3'  
                 *ngFor='let plan of plans let i = index'>

                <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="http://demo.olevmedia.net/mdwp/wp-content/uploads/2015/10/shutterstock_211490554-700x466.jpg" style="width: 18rem;" alt="Card image cap">
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary" 
                         (click)='viewPlan()'>Go somewhere</a>
                  </div>
                </div>
            </div>
            </div>
        </div>
    `,
    
})

export class PlanGridComponent {
    plans = ['Vancouver', 'Singapore', 'San Francisco'];
    
    constructor(){
        
    }

    viewPlan(){
        console.log('view plan');
    }
}

