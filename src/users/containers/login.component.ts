import { Component, OnInit } from '@angular/core';
import * as fromUserStore from '../store';
import * as fromShoppingCartStore from '../../shoppingcart/store';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { UserService } from '../store/services/users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    users: User[];


    constructor(
        private store: Store<fromUserStore.UserState | fromShoppingCartStore.ShoppingCartState>,
        private router: Router
    ) { }

    testing = true;
    ngOnInit() {
        // skip login FOR TESTING ONLY
        if (this.testing) {
            let user: User = {
                "id": 1,
                "username": "mandeuk",
                "password": "chichu",
                "firstname": "Jennie",
                "middlename": "RubyJane",
                "lastname": "Kim",
                "email": "kimjennie@samplemail.com",
                "birthdate": "01/26/1995",
                "interests": "Playing with Kuma"
            }
            this.store.dispatch(new fromUserStore.LoginUser(user));
            this.store.dispatch(new fromShoppingCartStore.LoadCart(user));
            this.router.navigate(['/shop']);
        }

        let loggedin: boolean;
        this.store.select(fromUserStore.getUserLoggedIn).subscribe(loggedin => loggedin);

        // Load all of the users
        this.store.dispatch(new fromUserStore.LoadUsers);

        // set the users to a variable
        this.store.select(fromUserStore.getUsers).subscribe((users) => this.users = users);
    }

    attemptLogin(event: { username: string, password: string }) {

        if (!event.username && !event.password) {
            window.alert("Please fill up the form");
            return;
        }

        if (!event.username) {
            window.alert("No Username");
            return;
        }

        if (!event.password) {
            window.alert("No Password");
            return;
        }

        for (let user of this.users) {
            if (user.username == event.username) {
                if (user.password == event.password) {
                    // Login the User
                    this.store.dispatch(new fromUserStore.LoginUser(user));

                    // Load the cart of the user
                    this.store.dispatch(new fromShoppingCartStore.LoadCart(user));

                    this.router.navigate(['/shop']);
                    return;
                }
                window.alert("Wrong Password");
                return;
            }
        }

        window.alert("No Username exists");
    }

    forgotPassword() {
    }
}