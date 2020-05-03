import queryString from 'query-string';
import { ajax, AjaxRequest } from 'rxjs/ajax';

import { ENDPOINT, REQUEST_METHODS } from 'enums';
import { getNetworkRequestPath } from 'network';

import { GetArticlesParams } from './types';

export function getArticlesListRequest(params: GetArticlesParams) {
    const url = `${getNetworkRequestPath(ENDPOINT.ARTICLES)}?${queryString.stringify(params)}`;

    const requestParams: AjaxRequest = {
        url,
        method: REQUEST_METHODS.GET,
    };

    return ajax(requestParams);
}
