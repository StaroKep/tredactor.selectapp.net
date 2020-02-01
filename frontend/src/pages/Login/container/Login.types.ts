import { LoginProps } from 'pages/Login/Login.types';

export type LoginStateToProps = Pick<LoginProps, 'userEmail'>;
export type LoginDispatchToProps = Pick<LoginProps, 'setUserData'>;
