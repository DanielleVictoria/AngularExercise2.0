import * as fromUserStore from '../store';
import * as fromShoppingCartStore from '../../shoppingcart/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
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

    ngOnInit() {
        // Load all of the users
        this.store.dispatch(new fromUserStore.LoadUsers);

        // set the users to a variable to iterate later
        this.store.select(fromUserStore.getUsers).subscribe((users) => this.users = users);
    }

    // Control for a login attempt passed by the LoginForm component
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