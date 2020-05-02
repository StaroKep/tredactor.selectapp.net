import { RouterState } from 'connected-react-router';

import { UserStoreData } from 'data/entities/user/types';
import { ArticleStoreData } from 'data/entities/article/types';

export interface Store {
    user: UserStoreData;
    article: ArticleStoreData;
}

export type ExtendedStore = Store & {
    router: RouterState;
};

export type ExtendedWindow = Window & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
};
