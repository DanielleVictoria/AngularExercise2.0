import { User } from "../../../models/user";
import * as fromActions from '../actions';

export interface UserState {
    users: User[];
    currentUser: User;
    loggedin: boolean;
    loading: boolean;
    loaded: boolean;
}

export const initialState: UserState = {
    users: [],
    currentUser: {
        id: 0,
        password: " ",
        username: " ",
        firstname: " ",
        middlename: " ",
        lastname: " ",
        email: " ",
        birthdate: " "
    },
    loggedin: false,
    loading: false,
    loaded: false
}

export function reducer(
    state = initialState,
    action: fromActions.UserAction
): UserState {

    switch (action.type) {

        case fromActions.LOAD_USERS: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }

        case fromActions.LOGIN_USER_SUCCESS: {
            const user = action.payload;
            return {
                ...state,
                currentUser: user,
                loaded: true,
                loading: false,
                loggedin: true
            }
        }

        case fromActions.LOAD_USERS_SUCCESS: {
            const users = action.payload;
            return {
                ...state,
                users,
                loaded: true,
                loading: false,
            }
        }

        case fromActions.LOAD_USERS_FAILURE:
        case fromActions.LOGIN_USER_FAILURE: {
            return {
                ...state,
                loaded: false,
                loading: false,
                loggedin: false
            }
        }

        default: {
            return state;
        }
    }
}

export const getUsers = (state: UserState) => state.users;
export const getCurrentUser = (state: UserState) => state.currentUser;
export const getUserLoading = (state: UserState) => state.loading;
export const getUserLoaded = (state: UserState) => state.loaded;
export const getUserLoggedIn = (state: UserState) => state.loggedin;


