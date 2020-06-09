import { Article } from 'data/entities/article/types';

export interface PostArticleParams {
    articleId: number;
    userData: { userId: number };
}
