import { createSelector } from '@ngrx/store';

/*  reducers/index.ts */ import * as fromFeature from '../reducers';
/* reducers */ import * as fromProductReducers from '../reducers/products.reducer';
import { Product } from '../../../models/product';
import { FilterModel } from '../../components';

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

export const filterProducts = (model : FilterModel) => createSelector(
    getAllProducts, (products) => {
        if (model.category != 'None') {
            products = products.filter(product => product.category == model.category);
        }
        if (model.pricerange != 'None') {
            let range = model.pricerange.split('-').map ((value) => parseInt(value,10));
            products = products.filter (product => range[0] <= product.price && product.price <= range[1]);
        }

        products = products.sort((a : Product, b : Product) => {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            return 0;
        });

        if (model.sort == 'Descending') {
            products = products.reverse();
        }

        return products;
    }
);
