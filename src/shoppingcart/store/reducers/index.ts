import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromProducts from './products.reducer';
import * as fromCarts from './carts.reducer';

export interface ShoppingCartState {
    products : fromProducts.ProductsState;
    carts : fromCarts.CartsState; 
}

export const reducers : ActionReducerMap<ShoppingCartState> = {
    products : fromProducts.reducer,
    carts : fromCarts.reducer
};

export const getShoppingCartState = createFeatureSelector <ShoppingCartState> ('shoppingcart');

