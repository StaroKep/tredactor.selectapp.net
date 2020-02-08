import { ProfileProps } from 'pages/Profile';

export type ProfileStateToProps = Pick<ProfileProps, 'userEmail'>;

export type ProfileDispatchToProps = Pick<ProfileProps, 'setUserData'>;
