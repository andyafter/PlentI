import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './shared/dashboard.component'

const appRoutes: Routes = [
];

@NgModule({
    imports:      [ BrowserModule,
                    RouterModule.forRoot(appRoutes)],
    
    declarations: [ AppComponent,
                    DashboardComponent],
    
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
