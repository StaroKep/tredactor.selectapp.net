import { SetUserDataAction } from 'data/entities/user/actions';

export interface ProfileProps {
    userEmail?: string;

    setUserData: (data: SetUserDataAction['payload']) => void;
}
