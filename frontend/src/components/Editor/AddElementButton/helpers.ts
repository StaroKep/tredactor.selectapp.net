import { ArticleContentType } from 'enums/articleContent';

export const dataTemplates = {
    [ArticleContentType.TEXT]: {
        type: ArticleContentType.TEXT,
        data: '',
    },
    [ArticleContentType.IMAGE]: {
        type: ArticleContentType.IMAGE,
        data: '',
        isApproved: false,
    },
    // [ArticleContentType.CITATION]: {
    //     type: ArticleContentType.CITATION,
    //     data: '',
    // },
};
