import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromReducer from '../reducers/user.reducer';

export const getUserState = createSelector (
    fromFeature.getUsersState,
    (state : fromFeature.UserState) => state.user
);

export const getUser = createSelector (
    getUserState,
    fromReducer.getUser
);

export const getUserLoggedIn = createSelector (
    getUserState,
    fromReducer.getUserLoggedIn
);


