import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Product } from '../../models/product'
import { Observable } from 'rxjs';

const PRODUCTS_API = 'http://localhost:3000/products';

@Injectable()
export class ProductsService {
    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.httpClient
            .get<Product[]>(PRODUCTS_API)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    createProduct(payload: Product): Observable<Product> {
        return this.httpClient
            .post<Product>(PRODUCTS_API, payload)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    updateProduct(payload: Product): Observable<Product> {
        return this.httpClient
            .put<Product>(`PRODUCTS_API/${payload.id}`, payload)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    deleteProduct(payload: Product): Observable<Product> {
        return this.httpClient
            .delete<Product>(`PRODUCTS_API/${payload.id}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }
}

