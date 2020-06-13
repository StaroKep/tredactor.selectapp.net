import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getCurrentArticle } from 'data/entities/article/selectors';
import { ArticleContent } from 'data/entities/article/types';
import { setCurrentArticleContent } from 'data/entities/article/actions';

import { DeleteElementButton } from 'components/Editor/DeleteElementButton';

import { Store } from 'data/store/types';

import {
    DeleteElementButtonStateToProps,
    DeleteElementButtonDispatchToProps,
} from './AddElementButton.types';

const mapStateToProps = (store: Store): DeleteElementButtonStateToProps => {
    const currentArticle = getCurrentArticle(store) || {};
    const { body: currentArticleContent = [] } = currentArticle;

    return { currentArticleContent };
};

const mapDispatchToProps = (dispatch: Dispatch): DeleteElementButtonDispatchToProps => {
    return {
        onSetCurrentArticleContent: (body: ArticleContent) =>
            dispatch(setCurrentArticleContent(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteElementButton);
