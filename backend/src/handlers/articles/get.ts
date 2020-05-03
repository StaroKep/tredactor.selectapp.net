import { Request, Response } from 'express';

import selectArticlesIdsByUserId from 'db/tables/articlesToUsers/select';
import { selectArticlesByIds } from './get.helpers';
import { Article } from 'handlers/article/types';

interface ArticlesGetQuery {
    userId?: number;
    start?: number;
    length?: number;
}

export default (request: Request, response: Response) => {
    const { query } = request;
    const { userId, length, start } = query as ArticlesGetQuery;

    const onErrorCallback = () => response.sendStatus(400);

    if (!userId) {
        onErrorCallback();
        return;
    }

    const onSuccessSelectArticlesByIdsCallback = (result: Partial<Article>[]) =>
        response.send(result);

    const onSuccessSelectArticlesIdsByUserIdCallback = (result: any) =>
        selectArticlesByIds(result, onErrorCallback, onSuccessSelectArticlesByIdsCallback);

    const selectArticlesIdsByUserIdParams = {
        start,
        userId,
        length,
    };

    selectArticlesIdsByUserId(
        selectArticlesIdsByUserIdParams,
        onErrorCallback,
        onSuccessSelectArticlesIdsByUserIdCallback,
    );
};
