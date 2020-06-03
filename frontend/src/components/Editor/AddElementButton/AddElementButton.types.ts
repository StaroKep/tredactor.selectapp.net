import { ArticleContent } from 'data/entities/article/types';

export interface AddElementButtonProps {
    currentArticleContent: ArticleContent;
    onSetCurrentArticleContent: (content: ArticleContent) => void;
    atTheEnd?: boolean;
    isBefore?: boolean;
    className?: string;
    contentElementIndex?: number;
}
