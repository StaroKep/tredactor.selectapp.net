import { getActionType } from 'data/actions';

export const SET_USER_DATA = getActionType('USER/SET_USER_DATA');

/** setUserData */
export interface SetUserDataAction {
    type: typeof SET_USER_DATA;
    payload: {
        email?: string;
    };
}

export const setUserData = (
    payload: SetUserDataAction['payload']
): SetUserDataAction => {
    return { type: SET_USER_DATA, payload };
};