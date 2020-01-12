import { Express } from 'express';

import constants from 'src/constants';

import get from './get';
import post from './post';
import patch from './patch';

const { paths } = constants;

export default (app: Express) => {
    app.get(paths.article, get);
    app.post(paths.article, post);
    app.patch(paths.article, patch);
};
