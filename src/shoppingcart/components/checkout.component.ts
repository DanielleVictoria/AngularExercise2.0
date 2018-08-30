import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { ShoppingCartState, getCartProducts, getCartQuantities, AddTransaction, getCart, RemoveAllCartProducts, LoadTransactions } from '../store';
import { getCurrentUser } from '../../users/store';
import { UserState } from '../../users/store/reducers/user.reducer';
import { Product } from '../../models/product';
import { Transaction } from '../../models/transaction';
import { Cart } from '../../models/cart';
import { Router } from '@angular/router';

@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html'
})

export class CheckoutComponent implements OnInit {

    user: User;
    products: Product[];
    quantities: number[];
    cart: Cart;

    constructor(
        private router: Router,
        private store: Store<ShoppingCartState | UserState>
    ) { }

    ngOnInit() {
        this.store.select(getCurrentUser).subscribe(user => this.user = user);
        this.store.select(getCartProducts).subscribe(products => this.products = products);
        this.store.select(getCartQuantities).subscribe(quantities => this.quantities = quantities);
        this.store.select(getCart).subscribe(cart => this.cart = cart);
    }

    getQuantity(index: number): number {
        return this.quantities[index];
    }

    computeOverall(): number {
        let quantities: number[] = [];
        for (let i in this.products) {
            quantities.push(this.products[i].price * this.quantities[i]);
        }
        return quantities.reduce((prev, current) => prev + current);
    }

    checkout() {
        let transaction: Transaction = {
            id: 0,
            cart: this.cart,
            status: 'pending',
            overallprice : this.computeOverall()
        }
        this.store.dispatch(new AddTransaction(transaction));
        this.store.dispatch(new RemoveAllCartProducts);
        this.router.navigate(['/pendingtransactions']);
    }


}