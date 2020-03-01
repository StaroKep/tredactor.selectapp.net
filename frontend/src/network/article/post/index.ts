import { ajax, AjaxRequest } from 'rxjs/ajax';

import { ENDPOINTS, REQUEST_METHODS } from 'enums';
import { getNetworkRequestPath } from 'network';

import { Article } from 'data/entities/article/types';

export function postArticle(article: Article) {
    const requestParams: AjaxRequest = {
        url: getNetworkRequestPath(ENDPOINTS.ARTICLE),
        method: REQUEST_METHODS.POST,
        body: article,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return ajax(requestParams);
}
