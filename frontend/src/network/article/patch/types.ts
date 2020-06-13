import { Article } from 'data/entities/article/types';

export interface PostArticleParams {
    articleData: Partial<Article>;
    userData: { userId: number };
}
