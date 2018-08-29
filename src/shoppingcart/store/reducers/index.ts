import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromProducts from './products.reducer';
import * as fromCarts from './carts.reducer';
import * as fromComments from './comments.reducer';
import * as fromTransactions from './transaction.reducer';

export interface ShoppingCartState {
    products : fromProducts.ProductsState;
    carts : fromCarts.CartsState; 
    comments : fromComments.CommentsState;
    transactions : fromTransactions.TransactionState;
}

export const reducers : ActionReducerMap<ShoppingCartState> = {
    products : fromProducts.reducer,
    carts : fromCarts.reducer,
    comments : fromComments.reducer,
    transactions : fromTransactions.reducer
};

export const getShoppingCartState = createFeatureSelector <ShoppingCartState> ('shoppingcart');

