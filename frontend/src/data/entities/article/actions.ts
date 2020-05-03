import { createAction } from 'deox';

import { getActionType } from 'data/actions';

import { Article } from './types';

export const SET_CURRENT_ARTICLE = getActionType('ARTICLE/SET_CURRENT_ARTICLE');
export const SAVE_CURRENT_ARTICLE = getActionType('ARTICLE/SAVE_CURRENT_ARTICLE');
export const FETCH_USER_ARTICLES_LIST = getActionType('ARTICLE/FETCH_USER_ARTICLES_LIST');
export const SET_USER_ARTICLES_LIST = getActionType('ARTICLE/SET_USER_ARTICLES_LIST');
export const ADD_USER_ARTICLES_LIST = getActionType('ARTICLE/ADD_USER_ARTICLES_LIST');

/** setCurrentArticle */
export interface SetCurrentArticleAction {
    type: typeof SET_CURRENT_ARTICLE;
    payload: Article;
}

export const setCurrentArticle = createAction(
    SET_CURRENT_ARTICLE,
    resolve => (data?: SetCurrentArticleAction['payload']) =>
        resolve<SetCurrentArticleAction['payload']>(data),
);

/** saveCurrentArticle */
export interface SaveCurrentArticleAction {
    type: typeof SAVE_CURRENT_ARTICLE;
}

export const saveCurrentArticle = createAction(SAVE_CURRENT_ARTICLE);

/** fetchUserArticlesList */
export interface FetchUserArticlesListAction {
    type: typeof FETCH_USER_ARTICLES_LIST;
    payload: {
        start?: number;
        length?: number;
    };
}

export const fetchUserArticlesList = createAction(
    FETCH_USER_ARTICLES_LIST,
    resolve => (data: FetchUserArticlesListAction['payload']) =>
        resolve<FetchUserArticlesListAction['payload']>(data),
);

/** setUserArticlesList */
export interface SetUserArticlesListAction {
    type: typeof SET_USER_ARTICLES_LIST;
    payload: Partial<Article>[];
}

export const setUserArticlesList = createAction(
    SET_USER_ARTICLES_LIST,
    resolve => (data?: SetUserArticlesListAction['payload']) =>
        resolve<SetUserArticlesListAction['payload']>(data),
);

/** addUserArticlesList */
export interface AddUserArticlesListAction {
    type: typeof ADD_USER_ARTICLES_LIST;
    payload: Partial<Article>[];
}

export const addUserArticlesList = createAction(
    ADD_USER_ARTICLES_LIST,
    resolve => (data: AddUserArticlesListAction['payload']) =>
        resolve<AddUserArticlesListAction['payload']>(data),
);
