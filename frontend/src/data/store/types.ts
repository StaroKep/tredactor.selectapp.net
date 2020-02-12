import { UserStoreData } from 'data/entities/user/types';
import { ArticleStoreData } from 'data/entities/article/types';

export interface Store {
    user?: UserStoreData;
    article?: ArticleStoreData;
}
