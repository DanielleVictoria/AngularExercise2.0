import { Injectable } from "@angular/core";

import { Actions, Effect } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs/internal/observable/of";

import * as productActions from '../actions/products.action';
import * as fromServices from '../../services';


@Injectable()
export class ProductsEffects {
    constructor (
        private action$ : Actions,
        private productsService : fromServices.ProductsService
    ) {}

    @Effect()   
    loadProducts$ = this.action$.ofType (productActions.LOAD_PRODUCTS).pipe ( 
        switchMap ( () => {
            console.log ('Load Products Detected');
            return this.productsService.getProducts()
                .pipe (
                    map (products => new productActions.LoadProductsSuccess(products)),
                    catchError (error => of( new productActions.LoadProductsFail(error)))
                )
        })
    );
}