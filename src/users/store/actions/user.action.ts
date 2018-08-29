import { Action } from '@ngrx/store';
import { User } from '../../../models/user';

export type UserAction =
    | LoginUser
    | LoginUserSuccess
    | LoginUserFailure
    | LoadUsers
    | LoadUsersSuccess
    | LoadUsersFailure
    | EditUser
    | EditUserSuccess
    | EditUserFail
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
    constructor(public payload: User) {
    }
}

export class LoginUserFailure implements Action {
    readonly type = LOGIN_USER_FAILURE;
    constructor(public payload: any) { }
}

// --------------------------------------- LOAD ------------------------------------------------------
export const LOAD_USERS = "[Users] Load Users";
export const LOAD_USERS_SUCCESS = "[Users] Load Users Success";
export const LOAD_USERS_FAILURE = "[Users] Load Users Failure";

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
    constructor() { }
}

export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload: User[]) {
    }
}

export class LoadUsersFailure implements Action {
    readonly type = LOAD_USERS_FAILURE;
    constructor(public payload: any) { 
    }
}

// --------------------------------------- EDIT USER ------------------------------------------------------
export const EDIT_USER = '[Users] Edit User';
export const EDIT_USER_SUCCESS = '[Users] Edit User Success';
export const EDIT_USER_FAIL = '[Users] Edit User Fail';

export class EditUser implements Action {
    readonly type = EDIT_USER;
    constructor (public payload : User) {}
}

export class EditUserSuccess implements Action {
    readonly type = EDIT_USER_SUCCESS;
    constructor (public payload : User) {}
}

export class EditUserFail implements Action {
    readonly type = EDIT_USER_FAIL;
    constructor (public payload : any) {}
}