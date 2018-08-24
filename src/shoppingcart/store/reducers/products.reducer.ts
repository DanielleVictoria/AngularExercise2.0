import * as fromProducts from '../actions/products.action';
import { Product } from '../../../models/product';

export interface ProductsState {
    entities: {
         [id: number]: Product 
        };
    loaded: boolean;
    loading: boolean;
}

export const initialState: ProductsState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromProducts.ProductsAction): ProductsState {
    switch (action.type) {

        case fromProducts.LOAD_PRODUCTS: {
            return {
                ...state,
                loading: true
            }
        }

        case fromProducts.LOAD_PRODUCTS_SUCCESS: {
            const payload = action.payload;
            const entities = payload.reduce(
                (entities: { [id: number]: Product }, product: Product) => {
                    return {
                        ...entities,
                        [product.id]: product,
                    }
                }, {
                    ...state.entities
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            }
        }

        case fromProducts.LOAD_PRODUCTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        default :
            return state;
    }
} 

export const getProductsEntities = (state: ProductsState) => state.entities;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsLoaded = (state: ProductsState) => state.loaded;