import { createReducer } from 'deox';

import { setCurrentArticle } from './actions';
import { ArticleStoreData } from './types';

export const initialState: ArticleStoreData = {};

export const articleReducer = createReducer(initialState, handleAction => [
    handleAction(setCurrentArticle, (state, { payload }) => {
        const { currentArticle } = state;

        return { ...state, currentArticle: { ...currentArticle, ...payload } };
    }),
]);
