import { Request, Response } from 'express';

import { Article } from './types';
import { patchArticleById } from './put.helpers';

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

    const onSuccessPatchArticleById = (articleId: number) => {
        console.log(articleId);
        response.send({
            id: articleId,
        });
    };

    patchArticleById(articleData, onErrorCallback, onSuccessPatchArticleById);
};
