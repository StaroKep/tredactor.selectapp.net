import { createAction } from 'deox';

import { ArticleContent } from 'common/types/entities/article';

import { getActionType } from 'data/actions';

import { Article } from './types';

export const SET_CURRENT_ARTICLE = getActionType('ARTICLE/SET_CURRENT_ARTICLE');
export const SET_CURRENT_ARTICLE_CONTENT = getActionType('ARTICLE/SET_CURRENT_ARTICLE_CONTENT');
export const SAVE_CURRENT_ARTICLE = getActionType('ARTICLE/SAVE_CURRENT_ARTICLE');
export const FETCH_ARTICLE_BY_ID = getActionType('ARTICLE/FETCH_ARTICLE_BY_ID');
export const FETCH_USER_ARTICLES_LIST = getActionType('ARTICLE/FETCH_USER_ARTICLES_LIST');
export const SET_USER_ARTICLES_LIST = getActionType('ARTICLE/SET_USER_ARTICLES_LIST');
export const ADD_USER_ARTICLES_LIST = getActionType('ARTICLE/ADD_USER_ARTICLES_LIST');
export const DELETE_ARTICLE_BY_ID = getActionType('ARTICLE/DELETE_ARTICLE_BY_ID');
export const DELETE_ARTICLE_BY_ID_FROM_STORE = getActionType(
    'ARTICLE/DELETE_ARTICLE_BY_ID_FROM_STORE',
);

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

/** setCurrentArticleContent */
export interface SetCurrentArticleContentAction {
    type: typeof SET_CURRENT_ARTICLE_CONTENT;
    payload: ArticleContent;
}

export const setCurrentArticleContent = createAction(
    SET_CURRENT_ARTICLE_CONTENT,
    resolve => (data?: SetCurrentArticleContentAction['payload']) =>
        resolve<SetCurrentArticleContentAction['payload']>(data),
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

/** fetchArticleById */
export interface FetchArticleByIdAction {
    type: typeof FETCH_ARTICLE_BY_ID;
    payload: number;
}

export const fetchArticleById = createAction(
    FETCH_ARTICLE_BY_ID,
    resolve => (data: FetchArticleByIdAction['payload']) =>
        resolve<FetchArticleByIdAction['payload']>(data),
);

/** deleteArticleById */
export interface DeleteArticleByIdAction {
    type: typeof DELETE_ARTICLE_BY_ID;
    payload: number;
}

export const deleteArticleById = createAction(
    DELETE_ARTICLE_BY_ID,
    resolve => (data: DeleteArticleByIdAction['payload']) =>
        resolve<DeleteArticleByIdAction['payload']>(data),
);

/** deleteArticleByIdFromStore */
export interface DeleteArticleByIdFromStoreAction {
    type: typeof DELETE_ARTICLE_BY_ID_FROM_STORE;
    payload: number;
}

export const deleteArticleByIdFromStore = createAction(
    DELETE_ARTICLE_BY_ID_FROM_STORE,
    resolve => (data: DeleteArticleByIdFromStoreAction['payload']) =>
        resolve<DeleteArticleByIdFromStoreAction['payload']>(data),
);
