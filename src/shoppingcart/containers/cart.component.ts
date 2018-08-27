import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromShoppingCartStore from '../store';
import * as fromUserStore from '../../users/store';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { CartService } from '../services';
import { FilterModel } from '../components';


@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {

    cartProducts$: Observable<Product[]>;
    currentUser: User;

    constructor(
        private store: Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>,
        private cartService : CartService
    ) { }

    ngOnInit() {
        // get the products from the loaded cart
        this.cartProducts$ = this.store.select(fromShoppingCartStore.getCartProducts);
    }

    removeFromCart(event : Product) {
        this.store.dispatch (new fromShoppingCartStore.RemoveFromCart(event));
    }

    filterProducts (event : FilterModel) {
        this.store.dispatch(new fromShoppingCartStore.LoadCart(this.currentUser)); 
        this.cartProducts$ = this.store.select (fromShoppingCartStore.filterCart(event));
    }
}
