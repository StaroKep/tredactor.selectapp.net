import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

import { Article } from './types';

const { databases, tables } = constants;

export function patchArticleById(
    data: Partial<Article>,
    onErrorCallback: Function,
    onSuccessCallback: (id: number) => void,
) {
    const { body, ...rest } = data;
    const { id } = rest;
    const stringifyedBody = JSON.stringify(body);

    const modyfiedData = {
        ...rest,
        body: stringifyedBody,
    };

    const tablePath = getTablePath([databases.tredactor, tables.articles]);

    const connection = DB.connect();
    connection.connect();

    connection.query(
        `UPDATE ${tablePath} SET ? WHERE (?? = ?)`,
        [modyfiedData, 'id', id],
        (err, result) => {
            if (err || !id) {
                console.log(err);
                onErrorCallback();
                return;
            }

            onSuccessCallback(id);
        },
    );

    connection.end();
}
