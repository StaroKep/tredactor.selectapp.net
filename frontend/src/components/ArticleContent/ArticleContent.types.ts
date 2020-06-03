import { ArticleContent } from "data/entities/article/types";

export interface ArticleContentProps {
    content: ArticleContent,
    onSetCurrentArticleContent: (content: ArticleContent) => void;
}