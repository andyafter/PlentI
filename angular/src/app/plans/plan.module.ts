import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlanListComponent } from './planlist.component';
import { PlanComponent } from './plan.component';
import { PlanRoutingModule } from './plan-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PlanRoutingModule
    ],
    declarations: [
        PlanListComponent,
        PlanComponent
    ]
})
export class PlanesModule {}
