import { Actions, Effect } from "@ngrx/effects";
import { UserService } from "../services/users.service";
import * as fromActions from '../actions';
import { switchMap, map, catchError } from "rxjs/operators";
import { User } from "../../../models/user";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private userService: UserService
    ) { }

    @Effect()
    loginUser$ = this.action$.ofType(fromActions.LOGIN_USER).pipe(
        map((action: fromActions.LoginUser) => action.payload),
        switchMap(user => {
            return this.userService
                .getUser(user.id)
                .pipe(
                    map(user => new fromActions.LoginUserSuccess(user)),
                    catchError(error => of(new fromActions.LoginUserFailure(error)))
                );
        })
    );

    @Effect()
    verifyUser$ = this.action$.ofType(fromActions.VERIFY_USER).pipe(
        map((action: fromActions.VerifyUser) => action.payload),
        switchMap(data => {
            return this.userService
                .getUserbyProperty('username',data.username)
                .pipe(  
                    map ( (data : string) => {
                        console.log ("You ended here");
                        console.log (data);
                        this.userService.getUserbyProperty('password', data).pipe(
                            map (data => {
                                console.log (data)
                            })
                        )
                    }),
                    catchError(error => of(new fromActions.LoginUserFailure(error)))
                );
        })
    );
}