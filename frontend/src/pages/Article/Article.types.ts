import { Article } from 'data/entities/article/types';

export interface ArticleProps {
    currentArticle?: Article;
    onGoBack: () => void;
    onGetArticleById: (id: number) => void;
}
