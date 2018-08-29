import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError, filter, tap } from 'rxjs/operators';
import { of } from "rxjs/internal/observable/of";
import * as fromActions from '../actions/transaction.action';
import * as fromServices from '../../services';

@Injectable()
export class TransactionsEffects {
    constructor(
        private action$: Actions,
        private transactionsService: fromServices.TransactionsService
    ) { }

    @Effect()
    loadTransactions$ = this.action$.ofType(fromActions.LOAD_TRANSACTIONS).pipe(
        switchMap(() => {
            return this.transactionsService.getTransactions()
                .pipe(
                    map(transactions => new fromActions.LoadTransactionsSuccess(transactions)),
                    catchError(error => of(new fromActions.LoadTransactionsFail(error)))
                )
        })
    );

    @Effect()
    addTransaction$ = this.action$.ofType(fromActions.ADD_TRANSACTION).pipe(
        map ((action : fromActions.AddTransaction) => action.payload),
        switchMap((transaction) => {
            return this.transactionsService.addTransaction(transaction)
                .pipe(
                    map(transaction => new fromActions.AddTransactionSuccess(transaction)),
                    catchError(error => of(new fromActions.AddTransactionFail(error)))
                )
        })
    );
}