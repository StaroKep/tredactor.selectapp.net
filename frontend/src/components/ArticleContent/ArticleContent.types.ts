import { ArticleContent } from 'data/entities/article/types';

export interface ArticleContentProps {
    body: ArticleContent;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
}
