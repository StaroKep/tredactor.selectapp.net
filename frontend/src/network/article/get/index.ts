import queryString from 'query-string';
import { ajax, AjaxRequest } from 'rxjs/ajax';

import { ENDPOINT, REQUEST_METHODS } from 'enums';
import { getNetworkRequestPath } from 'network';

import { GetArticleParams } from './types';

export function getArticle(params: GetArticleParams) {
    const url = `${getNetworkRequestPath(ENDPOINT.ARTICLE)}?${queryString.stringify(params)}`;

    const requestParams: AjaxRequest = {
        url: url,
        method: REQUEST_METHODS.GET,
    };

    return ajax(requestParams);
}
