import { Request, Response } from 'express';

import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

import { User } from './types';

const { databases, tables } = constants;

export default (request: Request, response: Response) => {
    const data: Partial<User> = request.query;

    const { email, password } = data;
    console.log(data);

    const tablePath = getTablePath([databases.tredactor, tables.users]);

    const connection = DB.connect();
    connection.connect();

    connection.query(
        `SELECT * FROM ${tablePath} WHERE ?? = ? AND ?? = ?`,
        ['email', email, 'password', password],
        (err, dbResponse: User[]) => {
            const result = dbResponse.shift();
            const { id = undefined, email = undefined } = result || {};

            if (err || !(id || email)) {
                console.log(err);
                response.sendStatus(500);
            } else {
                response.send({
                    id,
                    email,
                });
            }
        },
    );

    connection.end();
};
