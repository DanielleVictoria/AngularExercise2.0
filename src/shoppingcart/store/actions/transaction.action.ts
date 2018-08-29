import { Action } from '@ngrx/store';
import { Transaction } from '../../../models/transaction';

export type TransactionAction =
    | LoadTransactions
    | LoadTransactionsSuccess
    | LoadTransactionsFail
    | AddTransaction
    | AddTransactionSuccess
    | AddTransactionFail
    ;

export const LOAD_TRANSACTIONS = '[Transactions] Load Transactions';
export const LOAD_TRANSACTIONS_SUCCESS = '[Transactions] Load Transactions Success';
export const LOAD_TRANSACTIONS_FAIL = '[Transactions] Load Transactions Fail';

export class LoadTransactions implements Action {
    readonly type = LOAD_TRANSACTIONS;
}

export class LoadTransactionsSuccess implements Action {
    readonly type = LOAD_TRANSACTIONS_SUCCESS;
    constructor(public payload: Transaction[]) { }
}

export class LoadTransactionsFail implements Action {
    readonly type = LOAD_TRANSACTIONS_FAIL;
    constructor(public payload: any) { }
}

export const ADD_TRANSACTION = '[Transactions] Add Transaction';
export const ADD_TRANSACTION_SUCCESS = '[Transactions] Add Transaction Success';
export const ADD_TRANSACTION_FAIL = '[Transactions] Add Transaction Fail';

export class AddTransaction implements Action {
    readonly type = ADD_TRANSACTION;
    constructor(public payload: Transaction) { }
}

export class AddTransactionSuccess implements Action {
    readonly type = ADD_TRANSACTION_SUCCESS;
    constructor(public payload: Transaction) { }
}

export class AddTransactionFail implements Action {
    readonly type = ADD_TRANSACTION_FAIL;
    constructor(public payload: any) { }
}