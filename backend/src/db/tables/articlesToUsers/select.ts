import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath, getLimitRequest } from 'db/helpers';

import { SelectArticlesParams } from './types';

const { databases, tables } = constants;

export default function(
    params: SelectArticlesParams,
    onErrorCallback: Function,
    onSuccessCallback: (result: any) => void,
) {
    const { userId, start, length } = params;
    const tablePath = getTablePath([databases.tredactor, tables.articlesToUsers]);

    const connection = DB.connect();
    connection.connect();

    const limit = getLimitRequest({ start, length });

    connection.query(
        `SELECT ?? FROM ${tablePath} WHERE ?? = ? ${limit}`,
        ['articleId', 'userId', userId],
        (err, result) => {
            if (err || result.length === 0) {
                onErrorCallback();
                return;
            }

            const articleIds = result.map((row: { articleId: number }) => row.articleId);

            onSuccessCallback(articleIds);
        },
    );

    connection.end();
}
