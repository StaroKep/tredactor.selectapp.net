import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { Articles } from '../Articles';

import { Store } from 'data/store/types';

import { ArticlesStateToProps, ArticlesDispatchToProps } from './Articles.types';
import { getUserEmailFromStore } from 'data/entities/user/selectors';
import { deleteArticleById, fetchUserArticlesList } from 'data/entities/article/actions';
import { getUserArticlesFromStore } from 'data/entities/article/selectors';

const mapStateToProps = (store: Store): ArticlesStateToProps => {
    const userEmail = getUserEmailFromStore(store);
    const userArticles = getUserArticlesFromStore(store);

    return { userEmail, userArticles };
};

const mapDispatchToProps = (dispatch: Dispatch): ArticlesDispatchToProps => {
    return {
        onGoBack: () => dispatch(goBack()),
        onFetchUserArticles: () => dispatch(fetchUserArticlesList({})),
        onDeleteArticle: (id: number) => dispatch(deleteArticleById(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
