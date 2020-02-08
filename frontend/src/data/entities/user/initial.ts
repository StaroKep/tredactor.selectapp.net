import { UserStoreData } from 'data/entities/user/types';
import { getUserEmail } from 'services/LocalStorage/selectors';

const getInitialUserStoreData = (): UserStoreData => {
    return {
        email: getUserEmail(),
    };
};

export default getInitialUserStoreData;
