import { path } from 'ramda';
import { ActionsObservable, ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { setUserEmail } from 'services/LocalStorage/setters';
import { setUserData, SetUserDataAction } from './actions';

const setUserDataEpic = (action$: ActionsObservable<SetUserDataAction>) =>
    action$.pipe(
        ofType(setUserData['type']),
        tap(({ payload }) => {
            const email = path<string>(['email'], payload);

            if (!email) {
                setUserEmail();
            }
        }),
        ignoreElements()
    );

export default [setUserDataEpic];
