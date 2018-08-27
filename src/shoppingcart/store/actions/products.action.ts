// from action
import { Action } from '@ngrx/store';

// from project
import { Product } from '../../../models/product';

// data type for action
export type ProductsAction = 
    | LoadProducts
    | LoadProductsSuccess
    | LoadProductsFail
    ;

export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';

export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
    readonly type = LOAD_PRODUCTS_SUCCESS;
    constructor (public payload : Product[]) {}
}

export class LoadProductsFail implements Action {
    readonly type = LOAD_PRODUCTS_FAIL;
    constructor (public payload : any) {}
}





