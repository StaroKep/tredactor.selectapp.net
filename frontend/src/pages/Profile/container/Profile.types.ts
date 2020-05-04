import { ProfileProps } from 'pages/Profile';

export type ProfileStateToProps = Pick<ProfileProps, 'userEmail' | 'userArticles'>;

export type ProfileDispatchToProps = Pick<ProfileProps, 'onFetchUserArticles'>;
