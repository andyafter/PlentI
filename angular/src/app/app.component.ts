import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { DashboardComponent } from './shared/dashboard.component';


@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1> <dashboard></dashboard>`,
})

export class AppComponent  { name = 'Angular'; }
