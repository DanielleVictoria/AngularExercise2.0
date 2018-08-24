import { Actions, Effect } from "@ngrx/effects";
import { UserService } from "../services/users.service";
import * as fromActions from '../actions';
import { switchMap, map, catchError, filter, tap, withLatestFrom } from "rxjs/operators";
import { User } from "../../../models/user";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { UserState } from "../reducers/user.reducer";
import { Store } from "@ngrx/store";

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private userService: UserService,
        private store: Store<UserState>
    ) { }

    @Effect()
    loginUser$ = this.action$.ofType(fromActions.LOGIN_USER).pipe(
        map((action: fromActions.LoginUser) => new fromActions.LoginUserSuccess(action.payload)),
        catchError(error => of(new fromActions.LoginUserFailure(error)))
    );


    @Effect()
    loadUsers$ = this.action$.ofType(fromActions.LOAD_USERS).pipe(
        switchMap(() => {
            return this.userService
                .getUsers().pipe(
                    map((users: User[]) => new fromActions.LoadUsersSuccess(users)),
                    catchError(error => of(new fromActions.LoadUsersFailure(error)))
                )
        })
    );
}