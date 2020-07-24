import { ArticleContent } from 'data/entities/article/types';

export interface ArticleContentTextProps {
    articleContentElementId: number;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
    currentArticleContent: ArticleContent;
}
