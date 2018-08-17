import { createSelector } from '@ngrx/store';

/*  reducers/index.ts */ import * as fromFeature from '../reducers';
/* reducers */ import * as fromProductReducers from '../reducers/products.reducer';

// get the products state from the list of states
export const getProductsState = createSelector(
    fromFeature.getShoppingCartState,
    (state: fromFeature.ShoppingCartState) => state.products
);

// get the entities from the products state
export const getProductsEntities = createSelector(
    getProductsState, 
    fromProductReducers.getProductsEntities
);

// get all of the products from the entities (which came from the state)
export const getAllProducts = createSelector(
    getProductsEntities, entity => {
        return Object.keys (entity).map (
            id => entity[parseInt(id,10)]
        )
    }
);