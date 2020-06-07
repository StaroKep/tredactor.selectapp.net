import { UserStoreData } from 'data/entities/user/types';
import { SetUserDataAction } from 'data/entities/user/actions';

export interface MenuProps {
    userId: UserStoreData['id'];
    userEmail: UserStoreData['email'];
    onSetUserData: (data: SetUserDataAction['payload']) => void;

    /** Default: false */
    isProfilePage?: boolean;
}
