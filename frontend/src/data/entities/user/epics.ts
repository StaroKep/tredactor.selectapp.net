import { ofType } from 'deox';
import { ActionsObservable } from 'redux-observable';
import { ignoreElements, tap, map, mergeMap, filter } from 'rxjs/operators';
import { get } from 'lodash';

import { createNewUser as createNewUserRequest } from 'network/user/post';

import { setUserEmail } from 'services/LocalStorage/setters';
import { setUserData, SetUserDataAction, createNewUser, CreateNewUserAction } from './actions';

const setUserDataEpic = (action$: ActionsObservable<SetUserDataAction>) =>
    action$.pipe(
        ofType(setUserData),
        tap(({ payload }) => {
            const email = get(payload, ['email']);

            if (!email) {
                setUserEmail();
            }
        }),
        ignoreElements(),
    );

const createNewUserEpic = (action$: ActionsObservable<CreateNewUserAction>) =>
    action$.pipe(
        ofType(createNewUser),
        mergeMap(({ payload: createNewUserParams }) => {
            return createNewUserRequest(createNewUserParams).pipe(
                filter(({ status }) => {
                    return status === 200;
                }),
                map(() => {
                    const { email } = createNewUserParams;
                    return setUserData({ email });
                }),
            );
        }),
    );

export default [setUserDataEpic, createNewUserEpic];
