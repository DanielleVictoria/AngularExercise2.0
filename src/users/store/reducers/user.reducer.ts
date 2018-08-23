import { User } from "../../../models/user";
import * as fromActions from '../actions';

export interface UserState {
    user : User;
    loggedin : boolean;
    loading : boolean;
    loaded : boolean;
}

export const initialState : UserState = {
    user : {
        id: 0,
        password : " ",
        username: " ",
        firstname: " ",
        middlename: " ",
        lastname: " ",
        email: " ",
        birthdate: " "
    },
    loggedin : false,
    loading : false,
    loaded : false
}

export function reducer (
    state = initialState,
    action : fromActions.UsersAction
) : UserState {

    switch (action.type) {


        case fromActions.LOGIN_USER : {
            return {
                ...state,
                loading : true,
                loaded : false
            }
        }

        case fromActions.LOGIN_USER_SUCCESS : {
            const user = action.payload;
            return {
                ...state,
                user,
                loaded : true,
                loading : false,
                loggedin : true
            }
        }

        case fromActions.LOGIN_USER_FAILURE : {
            return {
                ...state,
                loaded : false,
                loading : false,
                loggedin : false
            }
        }

        default : {
            return state;
        }
    }
}

export const getUser = (state : UserState) => state.user;
export const getUserLoading = (state : UserState) => state.loading;
export const getUserLoaded = (state : UserState) => state.loaded;
export const getUserLoggedIn = (state : UserState) => state.loggedin;


