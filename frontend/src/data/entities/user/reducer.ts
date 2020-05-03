import { createReducer } from 'deox';

import { UserStoreData } from 'data/entities/user/types';
import { setUserData } from 'data/entities/user/actions';
import { setUserEmail, setUserId } from 'services/LocalStorage/setters';

export const initialState: UserStoreData = {};

export const userReducer = createReducer(initialState, handleAction => [
    handleAction(setUserData, (state, { payload }) => {
        const { email, id } = payload;
        console.log(payload);

        setUserId(id);
        setUserEmail(email);
        return { ...state, id, email };
    }),
]);
