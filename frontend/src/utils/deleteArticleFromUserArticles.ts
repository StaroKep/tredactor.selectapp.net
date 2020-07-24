import { Article } from 'data/entities/article/types';

export default function(id: number, currentUserArticles: Partial<Article>[]) {
    return currentUserArticles.filter(article => {
        const { id: articleId } = article;

        return articleId !== id;
    });
}
