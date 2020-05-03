import { Request, Response } from 'express';
import { AuthCookie } from 'handlers/user/auth/types';

export const isAuthorized = (request: Request) => {
    const cookies = request.cookies;

    return Boolean(cookies[AuthCookie]);
};

export default (request: Request, response: Response) => {
    if (isAuthorized(request)) {
        response.sendStatus(200);
        return;
    }

    response.sendStatus(401);
};
