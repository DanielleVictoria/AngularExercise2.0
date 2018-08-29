import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromShoppingCartStore from '../store';
import * as  fromUserStore from '../../users/store';
import { Transaction } from '../../models/transaction';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
    selector: 'pendingtransactions',
    templateUrl: 'pendingtransactions.component.html'
})

export class PendingTransactionsComponent implements OnInit {

    user : User;
    transactions : Observable<Transaction[]>;

    constructor(
        private store : Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>
    ) { }

    ngOnInit() {
        /*
        this.store.select (fromUserStore.getCurrentUser).subscribe(user => this.user = user);
        this.store.dispatch (new fromShoppingCartStore.LoadTransactions);
        console.log (this.user);
        this.transactions = this.store.select (fromShoppingCartStore.getPendingTransactionsOf(this.user));
        */
       this.store.dispatch (new fromShoppingCartStore.LoadTransactions);
       this.store.select (fromUserStore.getCurrentUser).subscribe(user => this.user = user);
       this.transactions = this.store.select (fromShoppingCartStore.getPendingTransactionsOf(this.user));
    }
}