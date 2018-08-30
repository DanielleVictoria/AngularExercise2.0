import * as fromShoppingCartStore from '../store';
import * as fromUserStore from '../../users/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { FilterModel } from '../components';
import { ProductEntity } from '../../models/productEntity';



@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {

    cartProducts$: Observable<Product[]>;
    currentUser: User;

    constructor(
        private store: Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>,
        private router : Router
    ) { }

    ngOnInit() {
        // get the products from the loaded cart
        this.cartProducts$ = this.store.select(fromShoppingCartStore.getCartProducts);
        this.store.select(fromUserStore.getCurrentUser).subscribe(user => this.currentUser = user);
    }

    removeFromCart(event : Product) {
        this.store.dispatch (new fromShoppingCartStore.RemoveFromCart(event));
    }

    filterProducts (event : FilterModel) {
        this.store.dispatch(new fromShoppingCartStore.LoadCart(this.currentUser)); 
        this.cartProducts$ = this.store.select (fromShoppingCartStore.filterCart(event));
    }

    editProductQuantity(event : ProductEntity) {
        this.store.dispatch(new fromShoppingCartStore.EditProductQuantity(event));
    }

    checkout() {
        this.router.navigate (['/checkout']);
    }
}
