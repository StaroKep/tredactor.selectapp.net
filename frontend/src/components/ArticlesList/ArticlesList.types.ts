import { Article } from 'data/entities/article/types';

export interface ArticlesListProps {
    articles?: Partial<Article>[];
}
