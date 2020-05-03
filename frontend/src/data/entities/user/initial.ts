import { UserStoreData } from 'data/entities/user/types';
import { getUserId, getUserEmail } from 'services/LocalStorage/selectors';

const getInitialUserStoreData = (): UserStoreData => {
    return {
        id: getUserId(),
        email: getUserEmail(),
    };
};

export default getInitialUserStoreData;
