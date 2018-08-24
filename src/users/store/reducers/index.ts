import * as fromReducer from './user.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface UserState {
    userState : fromReducer.UserState
}

export const reducers : ActionReducerMap <UserState> = {
    userState : fromReducer.reducer
};

export const getUsersState = createFeatureSelector <UserState> ('UserFeature');