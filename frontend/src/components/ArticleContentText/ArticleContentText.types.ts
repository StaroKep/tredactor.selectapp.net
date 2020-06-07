import { ArticleContent } from 'data/entities/article/types';

export interface ArticleContentTextProps {
    articleContentElementId: number;
    onSetCurrentArticleContent: (content: ArticleContent) => void;
    currentArticleContent: ArticleContent;
}
