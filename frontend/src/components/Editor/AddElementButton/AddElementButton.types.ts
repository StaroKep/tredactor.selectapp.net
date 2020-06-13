import { ArticleContent } from 'data/entities/article/types';

export interface AddElementButtonProps {
    currentArticleContent: ArticleContent;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
    atTheEnd?: boolean;
    isBefore?: boolean;
    className?: string;
    contentElementIndex?: number;
}
