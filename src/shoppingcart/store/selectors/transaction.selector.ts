import * as fromFeature from '../reducers/index';
import * as fromTransactionReducer from '../reducers/transaction.reducer';
import { createSelector } from '@ngrx/store';
import { User } from '../../../models/user';

export const getTransactionState = createSelector(
    fromFeature.getShoppingCartState,
    (state: fromFeature.ShoppingCartState) => state.transactions
);

export const getTransactionEntities = createSelector(
    getTransactionState, 
    fromTransactionReducer.getTransactionEntities
);

export const getAllTransactions = createSelector(
    getTransactionEntities, entity => {
        return Object.keys (entity).map (
            id => entity[parseInt(id,10)]
        )
    }
);

export const getPendingTransactionsOf = (user : User) => createSelector(
    getAllTransactions, transactions => {
        return transactions.filter((transaction) => {
            return transaction.status == 'pending' && transaction.cart.user.id == user.id;
        });
    }
);

