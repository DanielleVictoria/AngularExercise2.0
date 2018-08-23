import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Cart } from '../../models/cart';

const CART_API = 'http://localhost:3000/carts';

@Injectable()
export class CartService {
    constructor(private httpClient: HttpClient) { }

    getCarts(): Observable<Cart[]> {
        return this.httpClient
            .get<Cart[]>(CART_API)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    getCart(cartID: number): Observable<Cart> {
        console.log (CART_API);
        return this.httpClient
            .get<Cart>(`${CART_API}/${cartID}`)  
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    createCart(payload: Cart): Observable<Cart> {
        return this.httpClient
            .post<Cart>(CART_API, payload)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    updateCart(payload: Cart): Observable<Cart> {
        return this.httpClient
            .put<Cart>(`CART_API/${payload.id}`, payload)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    deleteCart(payload: Cart): Observable<Cart> {
        return this.httpClient
            .delete<Cart>(`CART_API/${payload.id}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }


}