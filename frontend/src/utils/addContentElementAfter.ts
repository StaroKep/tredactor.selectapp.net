import { ArticleContent, ArticleContentElement } from 'data/entities/article/types';

export interface AddContentElementAfterParams {
    index: number;
    articleContent: ArticleContent;
    contentElementData: ArticleContentElement;
}

export default function(params: AddContentElementAfterParams) {
    const { index, articleContent, contentElementData } = params;

    const before = articleContent.slice(0, index + 1);
    const after = articleContent.slice(index + 1);

    return [...before, contentElementData, ...after];
}
