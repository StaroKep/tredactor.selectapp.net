import { CreateNewUserAction } from 'data/entities/user/actions';

export interface SignInProps {
    onSignInButtonClick: (payload: CreateNewUserAction['payload']) => void;
    userEmail?: string;
}
