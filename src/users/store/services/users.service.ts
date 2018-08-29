import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

const USERS_API = 'http://localhost:3000/users';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }

    // get a user according to a property
    getUserbyProperty(command: string): Observable<User> {
        return this.httpClient
            .get<User>(`${USERS_API}?${command}`)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    getUsers(): Observable<User[]> {
        return this.httpClient
            .get<User[]>(USERS_API)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            )
    }

    updateUser(user : User) : Observable<User> {
        return this.httpClient
            .put<User>(`${USERS_API}/${user.id}`, user)
            .pipe(
                catchError ((error : any) => Observable.throw (error.json()))
            );
    }
}