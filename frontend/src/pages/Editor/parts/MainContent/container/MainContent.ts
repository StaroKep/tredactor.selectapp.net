import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setCurrentArticle, SetCurrentArticleAction } from 'data/entities/article/actions';

import { MainContent } from 'pages/Editor/parts/MainContent';

import { PreTextDispatchProps } from './MainContent.types';

const mapDispatchToProps = (dispatch: Dispatch): PreTextDispatchProps => {
    return {
        setCurrentArticle: (data: SetCurrentArticleAction['payload']) =>
            dispatch(setCurrentArticle(data)),
    };
};

export default connect(null, mapDispatchToProps)(MainContent);
