import { ArticleProps } from 'pages/Article';

export type ArticleStateToProps = Pick<ArticleProps, 'currentArticle'>;
export type ArticleDispatchToProps = Pick<ArticleProps, 'onGetArticleById' | 'onGoBack'>;
