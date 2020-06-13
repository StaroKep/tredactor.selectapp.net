import { Article, ArticleContent } from 'data/entities/article/types';

export interface EditorProps {
    userEmail?: string;
    currentArticle?: Article;
    onGoBack: () => void;
    onSetCurrentArticleContent: (body: ArticleContent) => void;
    onSetCurrentArticle: (params: Article) => void;
    onSaveCurrentArticle: () => void;
    onGetArticleById: (id: number) => void;
}
