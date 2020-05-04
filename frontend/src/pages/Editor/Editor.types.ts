import { Article } from 'data/entities/article/types';

export interface EditorProps {
    userEmail?: string;
    currentArticle?: Article;
    onGoBack: () => void;
    onSetCurrentArticle: (params: Article) => void;
    onSaveCurrentArticle: () => void;
}
