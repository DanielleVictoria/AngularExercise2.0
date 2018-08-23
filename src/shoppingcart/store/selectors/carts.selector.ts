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
export const getCartsEntities = createSelector(
    getCartsState,
    fromCartReducers.getCartsEntities
);

// unknown
export const getCartResult = createSelector(
    getCartsEntities, entity => {
        return Object.keys(entity).map(
            id => entity[parseInt(id, 10)]
        )
    }
);

export const getSelectedCart = createSelector(
    getCartsEntities,
    (entity): Cart => {
        return entity[1];
    }
);

export const getCartProducts = createSelector(
    getSelectedCart, (cart: Cart) => {
        if (cart) {
            return cart.products;
        }
        return [];
    }
);


