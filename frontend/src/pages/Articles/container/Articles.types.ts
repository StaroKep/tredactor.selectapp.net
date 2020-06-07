import { ArticlesProps } from 'pages/Articles';

export type ArticlesStateToProps = Pick<ArticlesProps, 'userEmail' | 'userArticles'>;

export type ArticlesDispatchToProps = Pick<ArticlesProps, 'onGoBack' | 'onFetchUserArticles'>;
