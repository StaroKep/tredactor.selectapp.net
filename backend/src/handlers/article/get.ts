import { Request, Response } from 'express';

import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

const { databases, tables } = constants;

export default (request: Request, response: Response) => {
    const { id } = request.query;

    const data = {
        id,
    };

    const tablePath = getTablePath([databases.tredactor, tables.articles]);

    const connection = DB.connect();
    connection.connect();

    connection.query(`SELECT * FROM ${tablePath} WHERE ?`, data, (err, result) => {
        if (err) {
            response.sendStatus(500);
        } else {
            response.send(result);
        }
    });

    connection.end();
};
