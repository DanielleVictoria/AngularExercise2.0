import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';

import * as fromShoppingCartStore from '../store';
import * as fromUserStore from '../../users/store';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { User } from '../../models/user';


@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {

    cartProducts$: Observable<Product[]>;
    currentUser: User;

    constructor(
        private store: Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>
    ) { }

    ngOnInit() {

        // Get the current user from the user store
        this.store.select(fromUserStore.getCurrentUser).subscribe((data) => this.currentUser = data);

        // Load the cart of the user
        this.store.dispatch(new fromShoppingCartStore.LoadCart(this.currentUser));

        // get the products from the loaded cart
        this.cartProducts$ = this.store.select(fromShoppingCartStore.getCartProducts);
    }

    removeFromCart(event : Product) {
        console.log ("Remove this : ", event);
    }
}
