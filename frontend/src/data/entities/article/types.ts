import { ArticleContent } from 'common/types/entities/article';

import { SetCurrentArticleAction } from './actions';

export interface Article {
    id?: number;
    title?: string;
    subtitle?: string;
    pretext?: string;
    body?: ArticleContent;
}

export interface ArticleStoreData {
    currentArticle?: Article;
    userArticles?: Partial<Article>[];
}

export interface ComponentWithSetCurrentArticleProps {
    setCurrentArticle: (data: SetCurrentArticleAction['payload']) => void;
}

export type ComponentWithSetCurrentArticleDispatchProps = Pick<
    ComponentWithSetCurrentArticleProps,
    'setCurrentArticle'
>;
