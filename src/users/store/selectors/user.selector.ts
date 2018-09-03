import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromReducer from '../reducers/user.reducer';

export const getUserState = createSelector(
    fromFeature.getUsersState,
    (state: fromFeature.UserState) => state.userState
);

export const getUsers = createSelector(
    getUserState,
    fromReducer.getUsers
);

export const getUsernameWithID = (id: number) => createSelector(
    getUsers, (users) => {
        if (users) {
            for (let user of users) {
                if (user.id == id) {
                    return user.username;
                }
            }
        }
    }
);

export const getUserWithUsername = (username: string) => createSelector(
    getUsers, (users) => {
        if (users) {
            for (let user of users) {
                if (user.username == username) {
                    return user;
                }
            }
            return null;
        }
    }
);

export const getCurrentUser = createSelector(
    getUserState,
    fromReducer.getCurrentUser
);

export const getUserLoggedIn = createSelector(
    getUserState,
    fromReducer.getUserLoggedIn
);


