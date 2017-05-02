import { Component } from '@angular/core';

import { PlanService } from '../services/plan.service';

@Component({
    selector: 'plan',
    template: `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="http://demo.olevmedia.net/mdwp/wp-content/uploads/2015/10/shutterstock_211490554-700x466.jpg" style="width: 18rem;" alt="Card image cap">
      <div class="card-block">
          <h4 class="card-title">{{destination}}</h4>
          <p class="card-text">Flight {{flight}} is the cheapest flight to this destination.</p>
          <p class="card-text">The trip starts at {{startDate}} and ends at {{backDate}}</p>
          <a href="#" class="btn btn-primary">Travel Here!</a>
      </div>
    </div>
    `
})

export class PlanComponent implements OnInit {

    destination = '';
    flight = '';
    startDate = '';
    backDate = '';
    
    constructor(private _planService: PlanService){
        //this._planService.getPlanID()
    }

    ngOnInit(){
        this._planService.getPlanID('1')
            .subscribe(plan => {
                console.log(plan);
                this.destination = plan.destination;
                this.flight = plan.flight;
                this.startDate = plan.startDate;
                this.backDate = plan.backDate;
            });
    }
}

