import queryString from 'query-string';
import { ajax, AjaxRequest } from 'rxjs/ajax';

import { getNetworkRequestPath } from 'network';
import { ENDPOINT, REQUEST_METHODS } from 'enums';

interface userGetData {
    email: string;
    password: string;
}

export const getUserDataRequest = (params: userGetData) => {
    const url = `${getNetworkRequestPath(ENDPOINT.USER)}?${queryString.stringify(params)}`;

    const requestParams: AjaxRequest = {
        url,
        method: REQUEST_METHODS.GET,
    };

    return ajax(requestParams);
};
