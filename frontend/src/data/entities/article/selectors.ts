import { Store } from 'data/store/types';
import { Article, ArticleStoreData } from 'data/entities/article/types';

export const getArticleStoreField = (store: Store): ArticleStoreData => {
    const fallback = {} as ArticleStoreData;

    return store.article || fallback;
};

export const getCurrentArticle = (store: Store): Article => {
    const fallback = {} as Article;
    const articleStoreField = getArticleStoreField(store);

    return articleStoreField.currentArticle || fallback;
};
