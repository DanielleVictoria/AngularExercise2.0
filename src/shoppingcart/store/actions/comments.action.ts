import { Action } from '@ngrx/store';
import { ProductComment } from '../../../models/comments';

export type CommentsAction =
    | LoadComments
    | LoadCommentsSuccess
    | LoadCommentsFail
    | AddComment
    | AddCommentSuccess
    | AddCommentFail
    ;

// LOADING COMMENTS
export const LOAD_COMMENTS = '[Comments] Load Comments';
export const LOAD_COMMENTS_SUCCESS = '[Comments] Load Comments Success';
export const LOAD_COMMENTS_FAIL = '[Comments] Load Comments Fail';

export class LoadComments implements Action {
    readonly type = LOAD_COMMENTS;
}

export class LoadCommentsSuccess implements Action {
    readonly type = LOAD_COMMENTS_SUCCESS;
    constructor(public payload: ProductComment[]) { }
}

export class LoadCommentsFail implements Action {
    readonly type = LOAD_COMMENTS_FAIL;
    constructor(public payload: any) { }
}

// ADD A COMMENTS
export const ADD_COMMENT = '[Comments] Add Comment';
export const ADD_COMMENT_SUCCESS = '[Comments] Add Comment Success';
export const ADD_COMMENT_FAIL = '[Comments] Add Comment Fail';

export class AddComment implements Action {
    readonly type = ADD_COMMENT;
    constructor (public payload : ProductComment) {}
}

export class AddCommentSuccess implements Action {
    readonly type = ADD_COMMENT_SUCCESS;
    constructor(public payload: ProductComment) { }
}

export class AddCommentFail implements Action {
    readonly type = ADD_COMMENT_FAIL;
    constructor(public payload: any) { }
}