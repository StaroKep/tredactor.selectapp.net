import { SetUserDataAction } from 'data/entities/user/actions';

export interface MenuProps {
    setUserData: (data: SetUserDataAction['payload']) => void;
}
