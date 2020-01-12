import { Request, Response } from 'express';

export default (request: Request, response: Response) => {
    response.send('post');
};
