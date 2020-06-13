import { ArticleContent, ArticleContentImage } from 'data/entities/article/types';

export interface ImageProps {
    index: number;
    elementData: ArticleContentImage;
    articleContent: ArticleContent;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
}
