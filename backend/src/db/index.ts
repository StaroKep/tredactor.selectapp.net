import mysql from 'mysql';

import constants from 'src/constants/dev';

const { db } = constants;

const connect = () => {
    return mysql.createConnection(db);
};

export const DB = {
    connect,
};
