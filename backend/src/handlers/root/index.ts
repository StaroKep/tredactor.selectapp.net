import { Express } from 'express';

import constants from 'src/constants';

import get from './get';

const { paths } = constants;

export default (app: Express) => {
    app.get(paths.root, get);
};
