import { createReducer } from 'deox';

import { UserStoreData } from 'data/entities/user/types';
import { setUserData } from 'data/entities/user/actions';
import { setUserEmail } from 'services/LocalStorage/setters';

export const initialState: UserStoreData = {};

export const userReducer = createReducer(initialState, handleAction => [
    handleAction(setUserData, (state, { payload }) => {
        const { email } = payload;

        setUserEmail(email);
        return { ...state, email };
    }),
]);
