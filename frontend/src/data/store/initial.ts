import { Store } from './types';
import getInitialUserStoreData from 'data/entities/user/initial';

const initialData = (): Store => {
    const user = getInitialUserStoreData();

    return {
        user,
    };
};

export default initialData;
