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
import { Cart } from "../../../models/cart";

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
        switchMap((productentity) => {

            // select current cart
            let cart : Cart;
            this.store.select(fromSelector.getCart).subscribe(data => cart = data);

            let products = {
                [productentity.product.id.toString()] : productentity,
                ...cart.products
            }

            cart.products = products;

            // update the cart
            return this.cartsService.updateCart(cart).pipe(
                map(cart => new cartActions.AddToCartSuccess(cart)),
                catchError(error => of(new cartActions.AddToCartFail(error)))
            );
        })
    );

    @Effect()
    editProductQuantity = this.action$.ofType(cartActions.EDIT_PRODUCTQUANTITY).pipe(
        map((action: cartActions.EditProductQuantity) => action.payload),
        switchMap((productentity) => {

            // select current cart
            let cart : Cart;
            this.store.select(fromSelector.getCart).subscribe(data => cart = data);

            cart.products[productentity.product.id.toString()].quantity = productentity.quantity;

            // update the cart
            return this.cartsService.updateCart(cart).pipe(
                map(cart => new cartActions.EditProductQuantitySuccess(cart)),
                catchError(error => of(new cartActions.EditProductQuantityFail(error)))
            );
        })
    );
}