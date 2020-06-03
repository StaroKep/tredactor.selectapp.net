import { ArticleContentType } from 'frontend/configs/enums/articleContent';

export interface ArticleContentText {
    type: ArticleContentType.TEXT;
    data: string;
}

export interface ArticleContentImage {
    type: ArticleContentType.IMAGE;
    data: string;
}

export interface ArticleContentCitation {
    type: ArticleContentType.CITATION;
    data: string;
}

export type ArticleContentElement = ArticleContentText | ArticleContentImage | ArticleContentCitation;

// TODO: need extend that type
export type ArticleContent = ArticleContentElement[];