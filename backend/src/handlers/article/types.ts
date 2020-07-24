import { ArticleContent as ArticleBody } from 'common/types/entities/article';

export interface Article {
    id: number;
    title: string;
    subtitle: string;
    pre_text: string;
    body: ArticleBody;
    creating_date: Date;
    editing_date: Date;
    publishing_date: Date;
    blocking_date: Date;
    published: boolean;
    blocked: boolean;
    blocking_reason: ArticleBody;
    positive: number;
    negative: number;
    interesting: number;
    boring: number;
    useful: number;
    useless: number;
    like: number;
    dislike: number;
    path: string;
}