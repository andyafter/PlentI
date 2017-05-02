import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PlanComponent }  from './plans/plan.component';
import { PlanListComponent }  from './plans/planlist.component';
import { DashboardComponent } from './shared/dashboard.component';
import { UserProfileComponent } from './user/profile.component';
import { MapComponent } from './shared/map.component';
import { PlanGridComponent } from './plans/plangrid.component';

import { routerConfig } from './app.config';

@NgModule({
    imports:      [ BrowserModule,
                    HttpModule,
                    routerConfig ],
    
    declarations: [ AppComponent,
                    PlanComponent,
                    PlanListComponent,
                    DashboardComponent,
                    PlanGridComponent,
                    MapComponent,
                    UserProfileComponent],
    
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
