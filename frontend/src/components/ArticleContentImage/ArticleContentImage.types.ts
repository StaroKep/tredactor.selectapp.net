import { ArticleContent } from 'data/entities/article/types';

export interface ArticleContentImageProps {
    articleContentElementId: number;
    onSetCurrentArticleContent: (content: ArticleContent) => void;
    currentArticleContent: ArticleContent;
    isApproved: boolean;
    data?: string;
}
