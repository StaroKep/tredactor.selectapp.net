import { ArticleContent } from 'data/entities/article/types';

export interface RemoveContentElementBeforeParams {
    index: number;
    articleContent: ArticleContent;
}

export default function(params: RemoveContentElementBeforeParams) {
    const { index, articleContent } = params;
    debugger;

    const before = articleContent.slice(0, index);
    const after = articleContent.slice(index + 1);

    return [...before, ...after];
}
