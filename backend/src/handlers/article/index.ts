import { Express } from 'express';

import constants from 'src/constants';

import get from './get';
import post from './post';
import put from './put';
import deleteArticle from './delete';

const { paths } = constants;

export default (app: Express) => {
    app.get(paths.article, get);
    app.post(paths.article, post);
    app.put(paths.article, put);
    app.delete(paths.article, deleteArticle);
};
