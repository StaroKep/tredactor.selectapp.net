import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

const { databases, tables } = constants;

export function deleteArticle(
    id: number,
    onErrorCallback: Function,
    noSuccessCallback: (id: number) => void,
) {
    const tablePath = getTablePath([databases.tredactor, tables.articles]);

    const connection = DB.connect();
    connection.connect();

    connection.query(`DELETE FROM ${tablePath} WHERE (?? = ?)`, ['id', id], (err, result) => {
        if (err) {
            console.log(err);
            onErrorCallback();
            return;
        }

        noSuccessCallback(result.insertId);
    });

    connection.end();
}
