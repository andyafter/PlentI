'use strict';

import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard.component';
import { PlanComponent } from './plans/plan.component';
import { PlanListComponent } from './plans/planlist.component';
import { UserProfileComponent } from './user/profile.component';
import { MapComponent } from './shared/map.component';
import { PlanGridComponent } from './plans/plangrid.component';

export const routerConfig = RouterModule.forRoot([
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserProfileComponent
    },
    {
        path: 'planlist',
        component: PlanListComponent
    },
    {
        path: 'plangrid',
        component: PlanGridComponent
    },
    {
        path: 'plan/:id',
        component: PlanComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]);
