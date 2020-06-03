import { ArticleContent, ArticleContentText } from 'data/entities/article/types';

export interface TextProps {
    index: number;
    elementData: ArticleContentText;
    articleContent: ArticleContent;
    onSetCurrentArticleContent: (content: ArticleContent) => void;
}
