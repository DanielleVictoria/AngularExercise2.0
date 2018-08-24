import { createSelector } from '@ngrx/store';

/*  reducers/index.ts */ import * as fromFeature from '../reducers';
/* reducers */ import * as fromCartReducers from '../reducers/carts.reducer';

import { Cart } from '../../../models/cart';
import { Product } from '../../../models/product';

// get the state tree of carts
export const getCartsState = createSelector(
    fromFeature.getShoppingCartState,
    (state: fromFeature.ShoppingCartState) => state.carts
);


// get the entities
export const getCartEntities = createSelector(
    getCartsState,
    fromCartReducers.getCartsEntities
);

export const getCarts = createSelector(
    getCartEntities, entity => {
        return Object.keys(entity).map(
            id => entity[parseInt(id, 10)]
        )
    });

export const getCart = createSelector(
    getCarts, (carts) => {
        return carts[0]
    });

export const getCartProducts = createSelector(
    getCart, (cart) => {
        if (cart) {
            return Object.keys(cart.products).map(
                id => cart.products[parseInt(id, 10)].product
            )
        }
    });

export const getProductQuantities = createSelector(
    getCart, (cart) => {
        if (cart) {
            return Object.keys(cart.products).map(
                (id) => cart.products[parseInt(id, 10)].quantity
            )
        }
    });

export const getProductQuantity = (product: Product) => createSelector(
    getCart, (cart) => {
        if (cart) {
           return cart.products[product.id].quantity
        }
    });



