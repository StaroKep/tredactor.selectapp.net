import { CreateNewUserAction } from 'data/entities/user/actions';

export interface SignUpProps {
    onSignUpButtonClick: (payload: CreateNewUserAction['payload']) => void;
    userEmail?: string;

}
