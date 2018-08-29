import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError, filter, tap } from 'rxjs/operators';
import { of } from "rxjs/internal/observable/of";
import * as fromActions from '../actions/comments.action';
import * as fromServices from '../../services';

@Injectable()
export class CommentsEffects {
    constructor(
        private action$: Actions,
        private commentsService: fromServices.CommentsService
    ) { }

    @Effect()
    loadComments$ = this.action$.ofType(fromActions.LOAD_COMMENTS).pipe(
        switchMap(() => {
            return this.commentsService.getComments()
                .pipe(
                    map(comments => new fromActions.LoadCommentsSuccess(comments)),
                    catchError(error => of(new fromActions.LoadCommentsFail(error)))
                )
        })
    );

    @Effect()
    addComment$ = this.action$.ofType(fromActions.ADD_COMMENT).pipe(
        map ((action : fromActions.AddComment) => action.payload),
        switchMap((comment) => {
            return this.commentsService.addComment(comment)
                .pipe(
                    map(comment => new fromActions.AddCommentSuccess(comment)),
                    catchError(error => of(new fromActions.AddCommentFail(error)))
                )
        })
    );
}