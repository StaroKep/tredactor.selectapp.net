import { localStorageFields } from './types';

export const setUserEmail = (email?: string) => {
    if (!email) {
        localStorage.removeItem(localStorageFields.userEmail);
    } else {
        localStorage.setItem(localStorageFields.userEmail, email);
    }
};

export const setUserId = (userId?: number) => {
    if (!userId) {
        localStorage.removeItem(localStorageFields.userId);
    } else {
        localStorage.setItem(localStorageFields.userId, String(userId));
    }
};
