import { Component } from '@angular/core'

@Component({
    selector: 'app-user-profile',
    template: `
        <div>
            Here is the profile 
        </div>
    `
})

export class UserProfileComponent{
    // here should be restful API to fetch and modify data
    constructor(){
        console.log('Profile Page Initialized!');
    }
}
