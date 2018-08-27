import { createSelector } from '@ngrx/store';

/*  reducers/index.ts */ import * as fromFeature from '../reducers';
/* reducers */ import * as fromCartReducers from '../reducers/carts.reducer';

import { Cart } from '../../../models/cart';
import { Product } from '../../../models/product';
import { ProductEntity } from '../../../models/productEntity';
import { FilterModel } from '../../components';

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

export const getProductEntity = (product: Product)  => createSelector(
    getCart, (cart) => {
        if (cart) {
           return cart.products[product.id.toString()]
        }
    }
);

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

    export const filterCart = (model : FilterModel) => createSelector(
        getCartProducts, (products) => {
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

