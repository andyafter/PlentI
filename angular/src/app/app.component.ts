import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shared/dashboard.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1> <dashboard></dashboard>`,
})

export class AppComponent  { name = 'Angular'; }
