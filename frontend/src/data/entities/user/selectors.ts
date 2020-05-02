import { Store } from 'data/store/types';
import { UserStoreData } from 'data/entities/user/types';

export function getUser(store: Store): UserStoreData {
    return store.user;
}

export function getUserEmailFromStore(store: Store): UserStoreData['email'] {
    return getUser(store).email;
}
