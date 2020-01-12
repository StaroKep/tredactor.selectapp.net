import path from 'path';
import { Request, Response } from 'express';

const index = path.resolve(process.cwd(), 'public/index.html');

export default (request: Request, response: Response) => {
    response.sendFile(index);
};
