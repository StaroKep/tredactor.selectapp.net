import { Express } from 'express';

import constants from 'src/constants';

import post from './post';

const { paths } = constants;

export default (app: Express) => {
    app.post(paths.registration, post);
};
