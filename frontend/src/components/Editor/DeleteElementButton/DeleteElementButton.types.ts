import { ArticleContent } from 'data/entities/article/types';

export interface DeleteElementButtonProps {
    currentArticleContent: ArticleContent;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
    contentElementIndex?: number;
}
