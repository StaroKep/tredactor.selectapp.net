import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { Article } from '../Article';

import { Store } from 'data/store/types';

import { ArticleStateToProps, ArticleDispatchToProps } from './Article.types';
import { fetchArticleById } from 'data/entities/article/actions';
import { getCurrentArticle } from 'data/entities/article/selectors';

const mapStateToProps = (store: Store): ArticleStateToProps => {
    const currentArticle = getCurrentArticle(store);

    return { currentArticle };
};

const mapDispatchToProps = (dispatch: Dispatch): ArticleDispatchToProps => {
    return {
        onGetArticleById: (id: number) => dispatch(fetchArticleById(id)),
        onGoBack: () => dispatch(goBack()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
