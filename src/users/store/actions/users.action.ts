import { Action } from '@ngrx/store';
import { User } from '../../../models/user';

export type UsersAction =
    | LoginUser
    | LoginUserSuccess
    | LoginUserFailure
    | VerifyUser
    ;

// --------------------------------------- LOGIN ------------------------------------------------------
export const LOGIN_USER = "[Users] Login User";
export const LOGIN_USER_SUCCESS = "[Users] Login User Success";
export const LOGIN_USER_FAILURE = "[Users] Login User Failure";

export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public payload: User) { }
}

export class LoginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class LoginUserFailure implements Action {
    readonly type = LOGIN_USER_FAILURE;
    constructor(public payload: any) { }
}

// --------------------------------------- VERIFY ------------------------------------------------------
export const VERIFY_USER = "[Users] Load Users";

export class VerifyUser implements Action {
    readonly type = VERIFY_USER;
    constructor (public payload : {username,password}) {}
}



