import { Component, OnInit } from '@angular/core';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { UserService } from '../store/services/users.service';

@Component({
    selector: 'login',
    templateUrl : 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(
        private store: Store<fromStore.UserState>,
        private userService : UserService
    ) { }

    ngOnInit() {

    }

    attemptLogin(event : {username,password}) {
        
        if (!event.username && !event.password) {
            window.alert ("Please fill up the form");
            return;
        }

        if (!event.username) {
            window.alert ("No Username");
            return;
        }

        if (!event.password) {
            window.alert ("No Password");
            return;
        }

        this.store.dispatch (new fromStore.VerifyUser(event));

    }

    forgotPassword() {
        console.log ("Go to Forgot Password");
    }
}