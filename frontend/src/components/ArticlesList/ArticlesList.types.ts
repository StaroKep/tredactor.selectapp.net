import { Article } from 'data/entities/article/types';

export interface ArticlesListProps {
    onDeleteArticle: (id: number) => void;
    articles?: Partial<Article>[];
}
