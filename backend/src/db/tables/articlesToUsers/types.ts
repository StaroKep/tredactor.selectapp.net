export interface InsertParams {
    articleId: number;
    userId: number;
}

export interface SelectArticlesParams {
    userId: number;
    start?: number,
    length?: number;
}