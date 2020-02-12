import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
    setCurrentArticle,
    SetCurrentArticleAction,
} from 'data/entities/article/actions';

import { PreText } from 'pages/Editor/parts/PreText';

import { PreTextDispatchProps } from './PreText.types';

const mapDispatchToProps = (dispatch: Dispatch): PreTextDispatchProps => {
    return {
        setCurrentArticle: (data: SetCurrentArticleAction['payload']) =>
            dispatch(setCurrentArticle(data)),
    };
};

export default connect(null, mapDispatchToProps)(PreText);
