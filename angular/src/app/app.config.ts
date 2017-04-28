'use strict';

import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard.component';
import { PlanComponent } from './plans/plan.component';
import { UserProfileComponent } from './user/profile.component';

export const routerConfig: Routes = [
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
];
