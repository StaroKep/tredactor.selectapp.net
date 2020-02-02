import { createReducer } from 'deox';

import { setUserData } from 'data/entities/user/actions';
import { setUserEmail } from 'src/services/LocalStorage/setters';

export const initialState = {};

export const userReducer = createReducer(initialState, handleAction => [
    handleAction(setUserData, (state, { payload }) => {
        const { email } = payload;

        setUserEmail(email);
        return { ...state, email };
    }),
]);
