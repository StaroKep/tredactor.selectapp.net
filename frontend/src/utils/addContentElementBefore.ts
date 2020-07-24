import { ArticleContent, ArticleContentElement } from 'data/entities/article/types';

export interface AddContentElementBeforeParams {
    index: number;
    articleContent: ArticleContent;
    contentElementData: ArticleContentElement;
}

export default function(params: AddContentElementBeforeParams) {
    const { index, articleContent, contentElementData } = params;

    const before = articleContent.slice(0, index);
    const after = articleContent.slice(index);

    return [...before, contentElementData, ...after];
}