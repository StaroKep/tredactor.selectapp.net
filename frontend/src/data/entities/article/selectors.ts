import { Store } from 'data/store/types';
import { ArticleStoreData } from 'data/entities/article/types';

export const getArticleStoreField = (store: Store): ArticleStoreData => {
    return store.article;
};

export const getCurrentArticle = (store: Store): ArticleStoreData['currentArticle'] => {
    const articleStoreField = getArticleStoreField(store);

    return articleStoreField.currentArticle;
};

export const getUserArticlesFromStore = (store: Store): ArticleStoreData['userArticles'] => {
    const articleStoreField = getArticleStoreField(store);

    return articleStoreField.userArticles;
};
