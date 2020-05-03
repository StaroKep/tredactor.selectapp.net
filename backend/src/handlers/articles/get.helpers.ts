import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath, getNumbersList } from 'db/helpers';

import { Article } from 'handlers/article/types';

const { databases, tables } = constants;

export function selectArticlesByIds(
    data: number[],
    onErrorCallback: Function,
    noSuccessCallback: (result: Partial<Article>[]) => void,
) {
    const tablePath = getTablePath([databases.tredactor, tables.articles]);

    const connection = DB.connect();
    connection.connect();

    connection.query(
        `SELECT ??, ?? FROM ${tablePath} WHERE ?? IN ${getNumbersList(data)}`,
        ['id', 'title', 'id'],
        (err, result) => {
            if (err) {
                console.log(err);
                onErrorCallback();
                return;
            }

            console.log(result);

            noSuccessCallback(result);
        },
    );

    connection.end();
}
