import { Store } from 'data/store/types';

export const getUserEmailFromStore = (store: Store) => {
    return store.user?.email;
};
