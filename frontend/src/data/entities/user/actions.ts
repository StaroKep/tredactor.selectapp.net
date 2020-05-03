import { getActionType } from 'data/actions';
import { createAction } from 'deox';

const SET_USER_DATA = getActionType('USER/SET_USER_DATA');
const CREATE_NEW_USER = getActionType('USER/CREATE_NEW_USER');
const FETCH_USER_DATA = getActionType('USER/FETCH_USER_DATA');

/** setUserData */
export interface SetUserDataAction {
    type: typeof SET_USER_DATA;
    payload: {
        id?: number;
        email?: string;
    };
}

export const setUserData = createAction(
    SET_USER_DATA,
    resolve => (data?: SetUserDataAction['payload']) => resolve<SetUserDataAction['payload']>(data),
);

/** createNewUser */
export interface CreateNewUserAction {
    type: typeof CREATE_NEW_USER;
    payload: {
        email: string;
        password: string;
    };
}

export const createNewUser = createAction(
    CREATE_NEW_USER,
    resolve => (data: CreateNewUserAction['payload']) =>
        resolve<CreateNewUserAction['payload']>(data),
);

/** fetchUserData */
export interface FetchUserDataAction {
    type: typeof FETCH_USER_DATA;
    payload: {
        email: string;
        password: string;
    };
}

export const fetchUserData = createAction(
    FETCH_USER_DATA,
    resolve => (data?: FetchUserDataAction['payload']) => resolve<FetchUserDataAction['payload']>(data),
);
