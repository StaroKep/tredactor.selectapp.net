import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

const { databases, tables } = constants;

export default function(
    articleId: number,
    onErrorCallback: Function,
    onSuccessCallback: Function,
) {
    const tablePath = getTablePath([databases.tredactor, tables.articlesToUsers]);

    const connection = DB.connect();
    connection.connect();

    connection.query(`DELETE FROM ${tablePath} WHERE (?? = ?)`, ['articleId', articleId], err => {
        if (err) {
            onErrorCallback();
            return;
        }

        onSuccessCallback();
    });

    connection.end();
}
