import { Article } from 'data/entities/article/types';

export interface ProfileProps {
    onFetchUserArticles: () => void;
    userEmail?: string;
    userArticles?: Partial<Article>[];
}
