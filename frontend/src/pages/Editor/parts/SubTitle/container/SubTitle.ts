import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
    setCurrentArticle,
    SetCurrentArticleAction,
} from 'data/entities/article/actions';

import { SubTitle } from 'pages/Editor/parts/SubTitle';

import { SubTitleDispatchProps } from './SubTitle.types';

const mapDispatchToProps = (dispatch: Dispatch): SubTitleDispatchProps => {
    return {
        setCurrentArticle: (data: SetCurrentArticleAction['payload']) =>
            dispatch(setCurrentArticle(data)),
    };
};

export default connect(null, mapDispatchToProps)(SubTitle);
