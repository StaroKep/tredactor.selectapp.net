import { Express } from 'express';

import get from './get';
import post from './post';
import patch from './patch';

export default (app: Express) => {
    app.get('/user', get);
    app.post('/user', post);
    app.patch('/user', patch);
};
