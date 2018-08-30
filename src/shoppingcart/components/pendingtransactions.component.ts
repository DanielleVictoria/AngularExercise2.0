import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromShoppingCartStore from '../store';
import * as  fromUserStore from '../../users/store';
import { Transaction } from '../../models/transaction';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { ProductEntity } from '../../models/productEntity';
import { Cart } from '../../models/cart';

@Component({
    selector: 'pendingtransactions',
    templateUrl: 'pendingtransactions.component.html'
})

export class PendingTransactionsComponent implements OnInit {

    user: User;
    transactions: Observable<Transaction[]>;

    constructor(
        private store: Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromShoppingCartStore.LoadTransactions);
        this.store.select(fromUserStore.getCurrentUser).subscribe(user => this.user = user);
        this.transactions = this.store.select(fromShoppingCartStore.getPendingTransactionsOf(this.user));
    }

    getProductEntity(cart: Cart): ProductEntity[] {
        if (cart) {
            return Object.keys(cart.products).map(
                id => cart.products[id]
            )
        }
    }
}