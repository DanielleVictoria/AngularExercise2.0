import { Component, OnInit } from '@angular/core';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { UserService } from '../store/services/users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl : 'login.component.html'
})

export class LoginComponent implements OnInit {

    users : User[];

    constructor(
        private store: Store<fromStore.UserState>,
        private userService : UserService,
        private router : Router
    ) { }

    ngOnInit() {

    }

    attemptLogin(event : {username : string,password : string}) {
        
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

        this.store.select (fromStore.getUsers)
            .subscribe((users) => this.users = users);
        
        for (let user of this.users) {
            if (user.username == event.username) {
                if (user.password == event.password) {
                    console.log ("USER TO LOGIN : ", user);
                    this.store.dispatch (new fromStore.LoginUser(user));
                    this.router.navigate (['/shop']);
                    return;
                }
                window.alert ("Wrong Password");
                return;
            }
        }

        window.alert ("No Username exists");
    }

    forgotPassword() {
    }
}