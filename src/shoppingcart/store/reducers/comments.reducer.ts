import * as fromAction from '../actions/comments.action';
import { ProductComment } from '../../../models/comments';

export interface CommentsState {
    entities: {
        [id: number]: ProductComment
    };
    loaded: boolean;
    loading: boolean;
}

export const initialState: CommentsState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromAction.CommentsAction): CommentsState {
    switch (action.type) {

        case fromAction.LOAD_COMMENTS: {
            return {
                ...state,
                loading: true
            }
        }

        case fromAction.LOAD_COMMENTS_SUCCESS: {
            const comments = action.payload;

            const entities = comments.reduce((entities: { [id: number]: ProductComment }, comment: ProductComment) => {
                return {
                    ...entities,
                    [comment.id]: comment,
                }
            }, {
                    ...state.entities
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            }
        }

        case fromAction.LOAD_COMMENTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case fromAction.ADD_COMMENT_SUCCESS : {
            const comment = action.payload;

            const entities = {
                ...state.entities,
                [comment.id] : comment
            }

            return {
                ...state,
                entities
            }
        }
        default:
            return state;
    }
}

export const getCommentsEntities = (state: CommentsState) => state.entities;
export const getCommentsLoading = (state: CommentsState) => state.loading;
export const getCommentsLoaded = (state: CommentsState) => state.loaded;