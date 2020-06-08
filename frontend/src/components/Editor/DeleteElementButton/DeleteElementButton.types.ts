import { ArticleContent } from 'data/entities/article/types';

export interface DeleteElementButtonProps {
    currentArticleContent: ArticleContent;
    onSetCurrentArticleContent: (content: ArticleContent) => void;
    contentElementIndex?: number;
}
