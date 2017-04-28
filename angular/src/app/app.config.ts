'use strict';

import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard.component';
import { PlanComponent } from './plans/plan.component';
import { UserProfileComponent } from './user/profile.component';

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
        path: 'plan',
        component: PlanComponent
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
