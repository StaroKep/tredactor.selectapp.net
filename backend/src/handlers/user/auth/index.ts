import { Express } from 'express';

import constants from 'src/constants';

import get from './get';
import post from './post';

const { paths } = constants;

export default (app: Express) => {
    app.get(paths.userAuth, get);
    app.post(paths.userAuth, post);
};
