import { Action } from "@ngrx/store";
import { Cart } from "../../../models/cart";
import { User } from "../../../models/user";
import { Product } from "../../../models/product";
import { ProductEntity } from "../../../models/productEntity";

export type CartsAction =
    | LoadCart
    | LoadCartSuccess
    | LoadCartFail
    | RemoveFromCart
    | RemoveFromCartSuccess
    | RemoveFromCartFail
    | AddToCart
    | AddToCartSuccess
    | AddToCartFail
    | EditProductQuantity
    | EditProductQuantitySuccess
    | EditProductQuantityFail
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
    constructor (public payload : Cart) {
    }
}

export class RemoveFromCartFail implements Action {
    readonly type = REMOVE_FROMCART_FAILURE;
    constructor (public payload : any) {}
}

// --------------------------------------- ADDING ------------------------------------------------------
export const ADD_TOCART = '[Carts] Adding to Cart';
export const ADD_TOCART_SUCCESS = '[Carts] Adding to Cart Success';
export const ADD_TOCART_FAILURE = '[Carts] Adding to Cart Failure';

export class AddToCart implements Action {
    readonly type = ADD_TOCART;
    constructor (public payload : ProductEntity) {}
}

export class AddToCartSuccess implements Action {
    readonly type = ADD_TOCART_SUCCESS;
    constructor (public payload : Cart) {
    }
}

export class AddToCartFail implements Action {
    readonly type = ADD_TOCART_FAILURE;
    constructor (public payload : any) {}
}

// --------------------------------------- EDIT ------------------------------------------------------
export const EDIT_PRODUCTQUANTITY = '[Carts] Edit Product Quantity';
export const EDIT_PRODUCTQUANTITY_SUCCESS = '[Carts] Edit Product Quantity Success';
export const EDIT_PRODUCTQUANTITY_FAILURE = '[Carts] Edit Product Quantity Failure';

export class EditProductQuantity implements Action {
    readonly type = EDIT_PRODUCTQUANTITY;
    constructor (public payload : ProductEntity) {}
}

export class EditProductQuantitySuccess implements Action {
    readonly type = EDIT_PRODUCTQUANTITY_SUCCESS;
    constructor (public payload : Cart) {
    }
}

export class EditProductQuantityFail implements Action {
    readonly type = EDIT_PRODUCTQUANTITY_FAILURE;
    constructor (public payload : any) {}
}
