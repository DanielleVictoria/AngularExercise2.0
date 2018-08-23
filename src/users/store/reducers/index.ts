import * as fromReducer from './user.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface UserState {
    user : fromReducer.UserState
}

export const reducers : ActionReducerMap <UserState> = {
    user : fromReducer.reducer
};

export const getUsersState = createFeatureSelector <UserState> ('user');