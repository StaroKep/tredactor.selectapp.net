import { ofType } from 'deox';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { push } from 'connected-react-router';

import {
    saveCurrentArticle,
    SaveCurrentArticleAction,
} from 'data/entities/article/actions';
import { Store } from 'data/store/types';
import { getCurrentArticle } from 'data/entities/article/selectors';
import { postArticle } from 'network/article/post';

const saveCurrentArticleEpic = (
    action$: ActionsObservable<SaveCurrentArticleAction>,
    store$: StateObservable<Store>
) =>
    action$.pipe(
        ofType(saveCurrentArticle),
        mergeMap(() => {
            const store = store$.value;
            const currentArticle = getCurrentArticle(store);
            const { text } = currentArticle;

            const data = {
                ...currentArticle,
                pre_text: currentArticle.pretext,
                text: undefined,
                pretext: undefined,
                body: text,
            };

            return postArticle(data).pipe(
                map(response => {
                    const { response: data } = response;
                    const { id } = data;

                    return push(`/article/${id}`);
                })
            );
        })
    );

export default [saveCurrentArticleEpic];
