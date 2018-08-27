import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from "rxjs/internal/observable/of";
import * as cartActions from '../actions/carts.action';
import * as fromServices from '../../services';
import * as fromSelector from '../selectors';
import { UserState } from "../../../users/store";
import { ShoppingCartState } from "../reducers";
import { Store } from "@ngrx/store";

@Injectable()
export class CartsEffects {

    constructor(
        private action$: Actions,
        private cartsService: fromServices.CartService,
        private store: Store<UserState | ShoppingCartState>
    ) { }

    @Effect()
    loadCart$ = this.action$.ofType(cartActions.LOAD_CART).pipe(
        map((action: cartActions.LoadCart) => action.payload),
        switchMap((user) => {
            return this.cartsService.getCart(user.id).pipe(
                map(cart => new cartActions.LoadCartSuccess(cart)),
                catchError(error => of(new cartActions.LoadCartFail(error)))
            )
        })
    );

    @Effect()
    removeProductFromCart = this.action$.ofType(cartActions.REMOVE_FROMCART).pipe(
        map((action: cartActions.RemoveFromCart) => action.payload),
        switchMap((product) => {
            // select current cart
            let cart;
            this.store.select(fromSelector.getCart).subscribe(data => cart = data);

            // declare a variable called products, let it be a cart.products but without the product you want to delete
            const { [product.id.toString()]: removed, ...products } = cart.products

            // re set the cart products
            cart.products = products;

            // update the cart
            return this.cartsService.updateCart(cart).pipe(
                map(cart => new cartActions.RemoveFromCartSuccess(cart)),
                catchError(error => of(new cartActions.RemoveFromCartFail(error)))
            );
        })
    );

    @Effect()
    addProductToCart = this.action$.ofType(cartActions.ADD_TOCART).pipe(
        map((action: cartActions.AddToCart) => action.payload),
        switchMap((product) => {
            // select current cart
            let cart;
            this.store.select(fromSelector.getCart).subscribe(data => cart = data);
    
            // dapat cart.products[x].product = product
            let products = {
                ...cart.products,
                //[product.id] : product
            }

            //cart.products = products;

            //console.log (cart.products);

            return this.cartsService.updateCart(cart).pipe(
                map(cart => new cartActions.AddToCartSuccess(cart)),
                catchError(error => of(new cartActions.AddToCartFail(error)))
            );
        })
    );
}