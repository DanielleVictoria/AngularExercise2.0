import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

const USERS_API = 'http://localhost:3000/users';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }

    // get a user according to id
    getUser(id: number): Observable<User> {
        return this.httpClient
            .get<User>(`${USERS_API}/${id}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    // get a user according to a property
    getUserbyProperty(property: string, value: string): Observable<User> {
        return this.httpClient
            .get<User>(`${USERS_API}?${property}=${value}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }
}