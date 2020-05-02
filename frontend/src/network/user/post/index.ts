import { ajax, AjaxRequest } from 'rxjs/ajax';

import { getNetworkRequestPath } from 'network';
import { ENDPOINT, REQUEST_METHODS } from 'enums';

interface userPostData {
    email: string;
    password: string;
}

export const createNewUser = (params: userPostData) => {
    const requestParams: AjaxRequest = {
        url: getNetworkRequestPath(ENDPOINT.USER),
        method: REQUEST_METHODS.POST,
        body: params,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return ajax(requestParams);
};
