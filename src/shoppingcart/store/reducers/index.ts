import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromProducts from './products.reducer';

export interface ShoppingCartState {
    products : fromProducts.ProductsState;
}

export const reducers : ActionReducerMap<ShoppingCartState> = {
    products : fromProducts.reducer,
};

export const getShoppingCartState = createFeatureSelector <ShoppingCartState> ('shoppingcart');

