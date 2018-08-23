import { Action } from "@ngrx/store";
import { Cart } from "../../../models/cart";

export const LOAD_CART = '[Carts] Load Cart';
export const LOAD_CART_SUCCESS = '[Carts] Load Cart Success';
export const LOAD_CART_FAIL = '[Carts] Load Cart Fail';


// for loading individual carts only
export class LoadCart implements Action {
    readonly type = LOAD_CART;
}

export class LoadCartSuccess implements Action {
    readonly type = LOAD_CART_SUCCESS;
    constructor(public payload : Cart) {

    }
}

export class LoadCartFail implements Action {
    readonly type = LOAD_CART_FAIL;
    constructor (public payload : any ) {

    }

}

export type CartsAction =
    | LoadCart
    | LoadCartSuccess
    | LoadCartFail;
