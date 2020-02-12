import { Store } from 'data/store/types';

export const getCurrentArticle = (store: Store) => {
    return store.article?.currentArticle;
};
