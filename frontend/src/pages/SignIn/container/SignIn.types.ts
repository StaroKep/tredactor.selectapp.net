import { SignInProps } from 'pages/SignIn';

export type SignInDispatchToProps = Pick<SignInProps, 'onSignInButtonClick'>;
export type SignInStateToProps = Pick<SignInProps, 'userEmail'>;
