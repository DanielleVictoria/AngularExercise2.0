import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { UserState, getCurrentUser } from '../store';

@Component({
    selector: 'userinformation',
    templateUrl: 'userinformation.component.html'
})

export class UserInformationComponent implements OnInit {
    
    isEditing : boolean = false;
    user : User; 
    modelUser : User;
    
    constructor(
        private store : Store<UserState>
    ) { }

    ngOnInit() {
        this.store.select (getCurrentUser).subscribe(user => this.user = user);
        this.modelUser = this.user;
    }

    toggleEdit() {
        this.isEditing = !this.isEditing;
    }

    onSubmit() {

    }
    
}