import { Article } from 'data/entities/article/types';

export interface TitleProps {
    onSetCurrentArticle: (data: Article) => void;
    value?: string;
}
