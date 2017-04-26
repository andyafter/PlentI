import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './shared/dashboard.component';
import { UserProfileComponent } from './user/profile.component';

const appRoutes: Routes = [
    { path: 'profile', component: UserProfileComponent }
];

@NgModule({
    imports:      [ BrowserModule,
                    RouterModule.forRoot(appRoutes)],
    
    declarations: [ AppComponent,
                    DashboardComponent,
                    UserProfileComponent],
    
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
