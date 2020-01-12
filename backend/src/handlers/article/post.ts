import { Request, Response } from 'express';

import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

import { Article } from './types';

const { databases, tables } = constants;

export default (request: Request, response: Response) => {
    const data: Partial<Article> = request.body;
    console.log(data);

    const tablePath = getTablePath([databases.tredactor, tables.articles]);

    const connection = DB.connect();

    connection.query(`INSERT INTO ${tablePath} SET ?`, data, err => {
        if (err) {
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });

    DB.end();
};
