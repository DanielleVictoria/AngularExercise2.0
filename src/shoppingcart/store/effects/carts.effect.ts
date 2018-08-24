import { Injectable } from "@angular/core";

import { Actions, Effect } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs/internal/observable/of";

import * as cartActions from '../actions/carts.action';
import * as fromServices from '../../services';


@Injectable()
export class CartsEffects {

    constructor(
        private action$: Actions,
        private cartsService: fromServices.CartService
    ) { }

    @Effect()
    loadCart$ = this.action$.ofType(cartActions.LOAD_CART).pipe(
        map ((action : cartActions.LoadCart) => action.payload),
        switchMap((user) => {
            return this.cartsService.getCart(user.id)
                .pipe(
                    map(cart => new cartActions.LoadCartSuccess(cart)),
                    catchError(error => of(new cartActions.LoadCartFail(error)))
                )
        })
    );
}