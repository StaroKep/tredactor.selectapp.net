import { ArticleContent, ArticleContentElement } from 'data/entities/article/types';

export interface AddContentElementAfterParams {
    articleContent: ArticleContent;
    contentElementData: ArticleContentElement;
}

export default function(params: AddContentElementAfterParams) {
    const { articleContent, contentElementData } = params;

    return [...articleContent, contentElementData];
}
