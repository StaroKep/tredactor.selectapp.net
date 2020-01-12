import mysql, { Connection } from 'mysql';

import constants from 'src/constants/dev';

const { db } = constants;

const connection: Connection = mysql.createConnection(db);

const connect = () => {
    connection.connect();
    return connection;
};

const end = () => {
    connection.end();
};

export const DB = {
    connect,
    end,
};
