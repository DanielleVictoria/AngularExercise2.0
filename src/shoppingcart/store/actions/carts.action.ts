import { Action } from "@ngrx/store";
import { Cart } from "../../../models/cart";
import { User } from "../../../models/user";
import { Product } from "../../../models/product";

export type CartsAction =
    | LoadCart
    | LoadCartSuccess
    | LoadCartFail
    | RemoveFromCart
    | RemoveFromCartSuccess
    | RemoveFromCartFail
    ;

// --------------------------------------- LOADING ------------------------------------------------------
export const LOAD_CART = '[Carts] Load Cart';
export const LOAD_CART_SUCCESS = '[Carts] Load Cart Success';
export const LOAD_CART_FAIL = '[Carts] Load Cart Fail';

// for loading individual carts only
export class LoadCart implements Action {
    readonly type = LOAD_CART;
    constructor(public payload: User) { }
}

export class LoadCartSuccess implements Action {
    readonly type = LOAD_CART_SUCCESS;
    constructor(public payload: Cart) { }
}

export class LoadCartFail implements Action {
    readonly type = LOAD_CART_FAIL;
    constructor(public payload: any) { }
}

// --------------------------------------- REMOVING ------------------------------------------------------
export const REMOVE_FROMCART = '[Carts] Remove from Cart';
export const REMOVE_FROMCART_SUCCESS = '[Carts] Remove from Cart Success';
export const REMOVE_FROMCART_FAILURE = '[Carts] Remove from Cart Failure';

export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROMCART;
    constructor (public payload : Product) {}
}

export class RemoveFromCartSuccess implements Action {
    readonly type = REMOVE_FROMCART_SUCCESS;
    
    // unsure
    constructor (public payload : Product) {}
}

export class RemoveFromCartFail implements Action {
    readonly type = REMOVE_FROMCART_FAILURE;

    constructor (public payload : any) {}
}