import { Express } from 'express';

import constants from 'src/constants';

import get from './get';
import post from './post';
import patch from './patch';
import deleteArticle from './delete';

const { paths } = constants;

export default (app: Express) => {
    app.get(paths.article, get);
    app.post(paths.article, post);
    app.patch(paths.article, patch);
    app.delete(paths.article, deleteArticle);
};
