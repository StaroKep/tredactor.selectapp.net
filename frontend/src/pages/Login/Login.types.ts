import { SetUserDataAction } from 'data/entities/user/actions';

export interface LoginProps {
    setUserData: (data: SetUserDataAction['payload']) => void;
    userEmail?: string,
}
