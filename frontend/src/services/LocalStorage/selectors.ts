import { localStorageFields } from './types';

export const getUserEmail = (): string | undefined => {
    const email = localStorage.getItem(localStorageFields.userEmail);

    if (!email) {
        return undefined
    }

    return email;
};
