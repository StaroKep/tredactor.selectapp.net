import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getCurrentArticle } from 'data/entities/article/selectors';
import { ArticleContent } from 'data/entities/article/types';
import { setCurrentArticleContent } from 'data/entities/article/actions';

import { AddElementButton } from 'components/Editor/AddElementButton';

import { Store } from 'data/store/types';

import {
    AddElementButtonStateToProps,
    AddElementButtonDispatchToProps,
} from './AddElementButton.types';

const mapStateToProps = (store: Store): AddElementButtonStateToProps => {
    const currentArticle = getCurrentArticle(store) || {};
    const { content: currentArticleContent = [] } = currentArticle;

    return { currentArticleContent };
};

const mapDispatchToProps = (dispatch: Dispatch): AddElementButtonDispatchToProps => {
    return {
        onSetCurrentArticleContent: (content: ArticleContent) =>
            dispatch(setCurrentArticleContent(content)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddElementButton);
