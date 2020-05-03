import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

import { InsertParams } from './types';

const { databases, tables } = constants;

export default function(
    params: InsertParams,
    onErrorCallback: Function,
    onSuccessCallback: Function,
) {
    const tablePath = getTablePath([databases.tredactor, tables.articlesToUsers]);

    const connection = DB.connect();
    connection.connect();

    connection.query(`INSERT INTO ${tablePath} SET ?`, params, err => {
        if (err) {
            onErrorCallback();
            return;
        }

        onSuccessCallback();
    });

    connection.end();
}
