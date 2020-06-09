import { Request, Response } from 'express';

import { articlesToUsersDelete } from 'src/db/tables/articlesToUsers';

import { Article } from './types';
import { deleteArticle } from './delete.helpers';

interface Body {
    articleData: Partial<Article>;
    userData: { userId: number };
}

export default (request: Request, response: Response) => {
    const { id } = request.query;
    const requestBody: Body = request.body;
    const { userData } = requestBody;
    const { userId } = userData || {};
    console.log(requestBody);

    if (!userId) {
        response.sendStatus(401);
        return;
    }

    const onErrorCallback = () => response.sendStatus(400);

    const onSuccessArticlesToUsersDelete = (articleId: number) => () => {
        response.sendStatus(200);
    };

    const onSuccessDeleteArticleCallback = (articleId: number) =>
        articlesToUsersDelete(
            Number(id),
            onErrorCallback,
            onSuccessArticlesToUsersDelete(articleId),
        );

    deleteArticle(Number(id), onErrorCallback, onSuccessDeleteArticleCallback);
};
