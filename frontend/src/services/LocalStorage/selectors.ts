import { localStorageFields } from './types';

export const getUserEmail = (): string | undefined => {
    const email = localStorage.getItem(localStorageFields.userEmail);

    if (!email) {
        return undefined;
    }

    return email;
};

export const getUserId = (): number | undefined => {
    const userId = localStorage.getItem(localStorageFields.userId);

    if (!userId) {
        return undefined;
    }

    return Number(userId);
};
