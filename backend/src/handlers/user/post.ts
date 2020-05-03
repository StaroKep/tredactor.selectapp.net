import { Request, Response } from 'express';

import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

import { User } from './types';

const { databases, tables } = constants;

export default (request: Request, response: Response) => {
    const data: Partial<User> = request.body;

    // TODO issue #3: Remove that modifiedData
    const modifiedData = {
        ...data,
        active: 1,
    };

    const tablePath = getTablePath([databases.tredactor, tables.users]);

    const connection = DB.connect();
    connection.connect();

    connection.query(`INSERT INTO ${tablePath} SET ?`, modifiedData, err => {
        if (err) {
            console.log(err);
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });

    connection.end();
};
