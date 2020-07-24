import { ajax, AjaxRequest } from 'rxjs/ajax';

import { ENDPOINT, REQUEST_METHODS } from 'enums';
import { getNetworkRequestPath } from 'network';

import { PostArticleParams } from './types';

export function deleteArticle(params: PostArticleParams) {
    const { articleId, userData } = params;

    const requestParams: AjaxRequest = {
        url: `${getNetworkRequestPath(ENDPOINT.ARTICLE)}/?id=${articleId}`,
        method: REQUEST_METHODS.DELETE,
        body: { userData },
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return ajax(requestParams);
}
