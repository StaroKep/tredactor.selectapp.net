import { ArticleContent } from 'data/entities/article/types';

export interface ArticleContentImageProps {
    articleContentElementId: number;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
    currentArticleContent: ArticleContent;
    isApproved: boolean;
    data?: string;
}
