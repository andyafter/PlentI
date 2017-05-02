import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanListComponent } from './planlist.component';
import { PlanComponent } from './plan.component';

const planRoutes: Routes = [
  { path: 'planlist',  component: PlanListComponent },
  { path: 'plan/:id', component: PlanComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(planRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PlanRoutingModule { }
