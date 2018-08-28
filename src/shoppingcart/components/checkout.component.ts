import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { ShoppingCartState, getCartProducts, getProductQuantity, getCartQuantities } from '../store';
import { getCurrentUser } from '../../users/store';
import { UserState } from '../../users/store/reducers/user.reducer';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html'
})

export class CheckoutComponent implements OnInit {

    user: User;
    products: Product[];
    quantities : number[];

    constructor(
        private store: Store<ShoppingCartState | UserState>
    ) { }

    ngOnInit() {
        this.store.select(getCurrentUser).subscribe(user => this.user = user);
        this.store.select (getCartProducts).subscribe(products => this.products = products);
        this.store.select (getCartQuantities).subscribe(quantities => this.quantities = quantities);
    }

    getQuantity(index : number) : number {
        return this.quantities[index];
    }

    computeOverall() : number {
        let quantities : number[] =[];
        for (let i in this.products) {
            quantities.push(this.products[i].price * this.quantities[i]);
        }
        return quantities.reduce ((prev, current) => prev + current);
    }


}