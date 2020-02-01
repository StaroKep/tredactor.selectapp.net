import { localStorageFields } from './types';

export const setUserEmail = (email?: string) => {
    if (!email) {
        localStorage.removeItem(localStorageFields.userEmail);
    } else {
        localStorage.setItem(localStorageFields.userEmail, email);
    }
};
