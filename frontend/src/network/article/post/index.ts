import { ajax, AjaxRequest } from 'rxjs/ajax';

import { ENDPOINT, REQUEST_METHODS } from 'enums';
import { getNetworkRequestPath } from 'network';

import { PostArticleParams } from './types';

export function postArticle(params: PostArticleParams) {
    const requestParams: AjaxRequest = {
        url: getNetworkRequestPath(ENDPOINT.ARTICLE),
        method: REQUEST_METHODS.POST,
        body: params,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return ajax(requestParams);
}
