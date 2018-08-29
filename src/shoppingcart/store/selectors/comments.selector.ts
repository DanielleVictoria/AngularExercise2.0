import * as fromFeature from '../reducers/index';
import * as fromCommentReducer from '../reducers/comments.reducer';import { createSelector } from '@ngrx/store';
import { Product } from '../../../models/product';

export const getCommentState = createSelector(
    fromFeature.getShoppingCartState,
    (state: fromFeature.ShoppingCartState) => state.comments
);

export const getCommentEntities = createSelector(
    getCommentState, 
    fromCommentReducer.getCommentsEntities
);

export const getAllComments = createSelector(
    getCommentEntities, entity => {
        return Object.keys (entity).map (
            id => entity[parseInt(id,10)]
        )
    }
);

export const getCommentsOfProduct = (productID : number) => createSelector(
    getAllComments, (allComments) => {
        return allComments.filter(comment => comment.productid == productID);
    }
); 


