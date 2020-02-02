import { getActionType } from 'data/actions';
import { createAction } from 'deox';

export const SET_USER_DATA = getActionType('USER/SET_USER_DATA');

/** setUserData */
export interface SetUserDataAction {
    type: typeof SET_USER_DATA;
    payload: {
        email?: string;
    };
}

export const setUserData = createAction(
    SET_USER_DATA,
    resolve => (data: SetUserDataAction['payload']) =>
        resolve<SetUserDataAction['payload']>(data)
);
