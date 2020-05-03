import { ofType } from 'deox';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { map, mergeMap, filter } from 'rxjs/operators';
import { push } from 'connected-react-router';

import {
    fetchUserArticlesList,
    saveCurrentArticle,
    SaveCurrentArticleAction,
    setUserArticlesList,
} from 'data/entities/article/actions';
import { Store } from 'data/store/types';
import { getCurrentArticle } from 'data/entities/article/selectors';
import { postArticle } from 'network/article/post';
import { getUserIdFromStore } from 'data/entities/user/selectors';
import { PostArticleParams } from 'network/article/post/types';
import { Path } from 'enums/paths';
import { getArticlesListRequest } from 'network/articles/get';

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
            const { text } = currentArticle;

            // TODO: Разобраться с этим
            const article = {
                ...currentArticle,
                pre_text: currentArticle.pretext,
                text: undefined,
                pretext: undefined,
                body: text,
            };

            const postArticleParams: PostArticleParams = {
                articleData: article,
                userData: {
                    userId,
                },
            };

            return postArticle(postArticleParams).pipe(
                map(response => {
                    const { response: data } = response;
                    const { id } = data;

                    return push(Path.ARTICLE.concat(`/${id}`));
                }),
            );
        }),
    );

const fetchUserArticlesListEpic = (
    action$: ActionsObservable<SaveCurrentArticleAction>,
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

export default [saveCurrentArticleEpic, fetchUserArticlesListEpic];
