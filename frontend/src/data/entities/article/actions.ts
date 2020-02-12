import { createAction } from 'deox';

import { getActionType } from 'data/actions';

import { Article } from './types';

export const SET_CURRENT_ARTICLE = getActionType('ARTICLE/SET_CURRENT_ARTICLE');

/** setCurrentArticle */
export interface SetCurrentArticleAction {
    type: typeof SET_CURRENT_ARTICLE;
    payload: Article;
}

export const setCurrentArticle = createAction(
    SET_CURRENT_ARTICLE,
    resolve => (data?: SetCurrentArticleAction['payload']) =>
        resolve<SetCurrentArticleAction['payload']>(data)
);
