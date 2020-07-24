import { ArticleContent, ArticleContentElement } from 'data/entities/article/types';

export interface GetUpdatedArticleContentParams {
    index: number;
    updatedElementData: ArticleContentElement;
    articleContent: ArticleContent;
}

export default function(params: GetUpdatedArticleContentParams) {
    const { index, articleContent, updatedElementData } = params;

    const before = articleContent.slice(0, index);
    const after = articleContent.slice(index + 1);

    return [...before, updatedElementData, ...after];
}
