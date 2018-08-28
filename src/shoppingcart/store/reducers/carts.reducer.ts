import { Cart } from "../../../models/cart";
import * as fromActions from "../actions/carts.action";
import * as fromUserStore from '../../../users/store';
import { Observable } from "rxjs";
import { User } from "../../../models/user";
import { Store } from "@ngrx/store";

export interface CartsState {
    entities: {
        [id: number]: Cart
    };
    loaded: boolean;
    loading: boolean;
}

export const initialState: CartsState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromActions.CartsAction): CartsState {

    switch (action.type) {

        case fromActions.LOAD_CART: {
            return {
                ...state,
                loading: true
            }
        }

        case fromActions.LOAD_CART_SUCCESS: {
            const cart = action.payload;
            const entities = {
                ...state.entities,
                [cart.id]: cart
            };
            return {
                ...state,
                loaded: true,
                loading: false,
                entities
            }
        }

        case fromActions.LOAD_CART_FAIL: {
            return {
                ...state,
                loaded: true,
                loading: false
            }
        }

        case fromActions.ADD_TOCART_SUCCESS:
        case fromActions.EDIT_PRODUCTQUANTITY_SUCCESS:
        case fromActions.REMOVE_FROMCART_SUCCESS: {
            const cart = action.payload;
            const entities = {
                ...state.entities,
                [cart.id]: cart
            }
            return {
                ...state,
                entities
            }
        }
        default:
            return state;
    }
}

export const getCartsEntities = (state: CartsState) => state.entities;
export const getCartsLoading = (state: CartsState) => state.loading;
export const getCartsLoaded = (state: CartsState) => state.loaded;