import { Request, Response } from 'express';

import { articlesToUsersInsert } from 'src/db/tables/articlesToUsers';

import { Article } from './types';
import { insertNewArticle } from './post.helpers';

interface Body {
    articleData: Partial<Article>;
    userData: { userId: number };
}

export default (request: Request, response: Response) => {
    const requestBody: Body = request.body;
    const { articleData, userData } = requestBody;
    const { userId } = userData || {};

    const onErrorCallback = () => response.sendStatus(400);

    if (!userId) {
        response.sendStatus(401);
        return;
    }

    const onSuccessArticlesToUsersInsert = (articleId: number) => () => {
        response.send({
            id: articleId,
        });
    };

    const onSuccessInsertNewArticleCallback = (articleId: number) => {
        const params = {
            userId,
            articleId,
        };

        articlesToUsersInsert(params, onErrorCallback, onSuccessArticlesToUsersInsert(articleId));
    };

    insertNewArticle(articleData, onErrorCallback, onSuccessInsertNewArticleCallback);
};
