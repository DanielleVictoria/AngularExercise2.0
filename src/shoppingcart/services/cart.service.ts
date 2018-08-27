import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Cart } from '../../models/cart';
import { User } from '../../models/user';
import { Product } from '../../models/product';

const CART_API = 'http://localhost:3000/carts';

@Injectable()
export class CartService {
    constructor(private httpClient: HttpClient) { }

    // get all of the carts
    getCarts(): Observable<Cart[]> {
        return this.httpClient
            .get<Cart[]>(CART_API)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    // get an individual's cart
    getCart(cartID: number): Observable<Cart> {
        console.log(CART_API);
        return this.httpClient
            .get<Cart>(`${CART_API}/${cartID}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    // create a cart
    createCart(payload: Cart): Observable<Cart> {
        return this.httpClient
            .post<Cart>(CART_API, payload)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    // update a cart
    updateCart(payload: Cart): Observable<Cart> {
        return this.httpClient
            .put<Cart>(`${CART_API}/${payload.id}`, payload)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    // delete a cart
    deleteCart(payload: Cart): Observable<Cart> {
        return this.httpClient
            .delete<Cart>(`${CART_API}/${payload.id}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    
}