import { Store } from './types';

import getInitialArticleStoreData from 'data/entities/article/initial';
import getInitialUserStoreData from 'data/entities/user/initial';

const initialData = (): Omit<Store, 'router'> => {
    return {
        user: getInitialUserStoreData(),
        article: getInitialArticleStoreData(),
    };
};

export default initialData;
