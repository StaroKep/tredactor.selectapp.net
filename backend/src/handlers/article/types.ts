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
    blocking_reason: ArticleBlockingReason;
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

export enum ArticleBodyElements {
    TEXT = 'TEXT',
    LINK = 'LINK',
}

export type ArticleBody = (ArticleText | ArticleLink)[];
export type ArticleBlockingReason = (ArticleText | ArticleLink)[];

export type ArticleText = {
    type: ArticleBodyElements.TEXT;
    text: string;
};

export type ArticleLink = {
    type: ArticleBodyElements.LINK;
    text: string;
    url: string;
};
