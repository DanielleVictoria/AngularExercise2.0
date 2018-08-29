import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const TRANSACTIONS_API = 'http://localhost:3000/transactions';

@Injectable()
export class TransactionsService {

    constructor(private httpClient: HttpClient) { }

    getTransactions(): Observable<Transaction[]> {
        return this.httpClient
            .get<Transaction[]>(TRANSACTIONS_API)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    addTransaction(transaction: Transaction): Observable<Transaction> {
        return this.httpClient
            .post<Transaction>(TRANSACTIONS_API, transaction)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }
}