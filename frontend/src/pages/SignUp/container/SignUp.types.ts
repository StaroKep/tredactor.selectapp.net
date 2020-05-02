import { SignUpProps } from 'pages/SignUp';

export type SignUpDispatchToProps = Pick<SignUpProps, 'onSignUpButtonClick'>;
export type SignUpStateToProps = Pick<SignUpProps, 'userEmail'>;
