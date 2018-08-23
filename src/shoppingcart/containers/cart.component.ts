import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';

import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';


@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {

    cartProducts$: Observable<Product[]>;

    constructor(
        private store: Store<fromStore.ShoppingCartState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadCart);
        this.cartProducts$ = this.store.select(fromStore.getCartProducts);
    }
}
