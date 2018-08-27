import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { FilterModel } from '../components';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})

export class ShopComponent implements OnInit {

    products$ : Observable<Product[]>;

    constructor(
        private store: Store<fromStore.ShoppingCartState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadProducts);
        this.products$ = this.store.select (fromStore.getAllProducts);
    }

    addToCart(event : Product) {
        this.store.dispatch(new fromStore.AddToCart(event));
    }

    filterProducts (event : FilterModel) {
        this.store.dispatch(new fromStore.LoadProducts); 
        this.products$ = this.store.select (fromStore.filterProducts(event));
    }
}