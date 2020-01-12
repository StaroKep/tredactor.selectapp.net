import { Request, Response } from 'express';

export default (request: Request, response: Response) => {
    const { id } = request.query;
    console.log(id);
    response.send('get');
};
