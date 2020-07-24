import { ofType } from 'deox';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { map, mergeMap, filter, mapTo } from 'rxjs/operators';
import { push } from 'connected-react-router';

import {
    fetchUserArticlesList,
    saveCurrentArticle,
    SaveCurrentArticleAction,
    setUserArticlesList,
    fetchArticleById,
    FetchUserArticlesListAction,
    FetchArticleByIdAction,
    setCurrentArticle,
    deleteArticleById,
    DeleteArticleByIdAction,
    deleteArticleByIdFromStore,
} from 'data/entities/article/actions';
import { Store } from 'data/store/types';
import { getCurrentArticle, getUserArticlesFromStore } from 'data/entities/article/selectors';
import { postArticle } from 'network/article/post';
import { getUserIdFromStore } from 'data/entities/user/selectors';
import { PostArticleParams } from 'network/article/post/types';
import { Path } from 'enums/paths';
import { getArticlesListRequest } from 'network/articles/get';
import { getArticle } from 'network/article/get';
import { deleteArticle } from 'network/article/delete';
import deleteArticleFromUserArticles from 'src/utils/deleteArticleFromUserArticles';
import { patchArticle } from 'network/article/patch';

const saveCurrentArticleEpic = (
    action$: ActionsObservable<SaveCurrentArticleAction>,
    store$: StateObservable<Store>,
) =>
    action$.pipe(
        ofType(saveCurrentArticle),
        filter(() => {
            const store = store$.value;

            return Boolean(getUserIdFromStore(store));
        }),
        mergeMap(() => {
            const store = store$.value;
            const userId = getUserIdFromStore(store) || 0;
            const currentArticle = getCurrentArticle(store) || {};
            const { body, id } = currentArticle;

            // TODO: Разобраться с этим
            const article = {
                ...currentArticle,
                pre_text: currentArticle.pretext,
                text: undefined,
                pretext: undefined,
                body,
            };

            const saveArticleParams: PostArticleParams = {
                articleData: article,
                userData: {
                    userId,
                },
            };

            debugger;

            if (id) {
                return patchArticle(saveArticleParams).pipe(
                    map(response => {
                        const { response: data } = response;
                        const { id } = data;

                        return push(Path.ARTICLE.concat(`/${id}`));
                    }),
                );
            }

            return postArticle(saveArticleParams).pipe(
                map(response => {
                    const { response: data } = response;
                    const { id } = data;

                    return push(Path.ARTICLE.concat(`/${id}`));
                }),
            );
        }),
    );

const fetchUserArticlesListEpic = (
    action$: ActionsObservable<FetchUserArticlesListAction>,
    store$: StateObservable<Store>,
) =>
    action$.pipe(
        ofType(fetchUserArticlesList),
        filter(() => {
            const store = store$.value;

            return Boolean(getUserIdFromStore(store));
        }),
        mergeMap(({ payload }) => {
            const store = store$.value;
            const userId = getUserIdFromStore(store) || 0;

            return getArticlesListRequest({
                ...payload,
                userId,
            }).pipe(
                filter(({ status }) => {
                    return status === 200;
                }),
                map(({ response }) => {
                    return setUserArticlesList(response);
                }),
            );
        }),
    );

const fetchArticleByIdEpic = (action$: ActionsObservable<FetchArticleByIdAction>) =>
    action$.pipe(
        ofType(fetchArticleById),
        mergeMap(({ payload: id }) => {
            return getArticle({ id }).pipe(
                map(({ response }) => {
                    // TODO: Разобраться с получением и форматом статьи
                    const article = response[0];
                    const { body } = article;

                    return setCurrentArticle({
                        ...article,
                        body: JSON.parse(body),
                    });
                }),
            );
        }),
    );

const deleteArticleByIdEpic = (
    action$: ActionsObservable<DeleteArticleByIdAction>,
    store$: StateObservable<Store>,
) =>
    action$.pipe(
        ofType(deleteArticleById),
        mergeMap(({ payload: id }) => {
            const userId = getUserIdFromStore(store$.value) || 0;

            return deleteArticle({
                articleId: id,
                userData: {
                    userId,
                },
            }).pipe(
                filter(({ status }) => {
                    return status === 200;
                }),
                mapTo(deleteArticleByIdFromStore(id)),
            );
        }),
    );

const deleteArticleByIdFromStoreEpic = (
    action$: ActionsObservable<DeleteArticleByIdAction>,
    store$: StateObservable<Store>,
) =>
    action$.pipe(
        ofType(deleteArticleByIdFromStore),
        map(({ payload: id }) => {
            const currentUserArticlesList = getUserArticlesFromStore(store$.value);
            const newUserArticlesList = deleteArticleFromUserArticles(id, currentUserArticlesList);

            return setUserArticlesList(newUserArticlesList);
        }),
    );

export default [
    fetchArticleByIdEpic,
    saveCurrentArticleEpic,
    fetchUserArticlesListEpic,
    deleteArticleByIdEpic,
    deleteArticleByIdFromStoreEpic,
];
