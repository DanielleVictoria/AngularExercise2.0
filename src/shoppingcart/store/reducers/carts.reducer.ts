import { Cart } from "../../../models/cart";
import * as fromCarts from "../actions/carts.action";

export interface CartsState {
    entities : {
        [id : number] : Cart
    };
    loaded : boolean;
    loading : boolean;
}

export const initialState : CartsState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer (state = initialState, action : fromCarts.CartsAction) : CartsState {
    
    switch (action.type) {
        
        case fromCarts.LOAD_CART : {
            console.log ('LOAD_CART');
            return {
                ...state,
                loading : true
            }
        }

        case fromCarts.LOAD_CART_SUCCESS : {
            console.log ('LOAD_CART_SUCCESS');
            const payload = action.payload;

            const entities = {
                ...state.entities,
                [payload.id] : payload
            };

            return {
                ...state,
                loaded : true,
                loading : false,
                entities
            }
        }

        case fromCarts.LOAD_CART_FAIL : {
            return {
                ...state,
                loaded : true,
                loading : false
            }
        }
        default : 
            return state;
    }
}

export const getCartsEntities = (state: CartsState) => state.entities;
export const getCartsLoading = (state: CartsState) => state.loading;
export const getCartsLoaded = (state: CartsState) => state.loaded;