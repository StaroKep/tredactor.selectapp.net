import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setCurrentArticle, SetCurrentArticleAction } from 'data/entities/article/actions';

import { Title } from 'pages/Editor/parts/Title';

import { TitleDispatchProps } from './Title.types';

const mapDispatchToProps = (dispatch: Dispatch): TitleDispatchProps => {
    return {
        setCurrentArticle: (data: SetCurrentArticleAction['payload']) =>
            dispatch(setCurrentArticle(data)),
    };
};

export default connect(null, mapDispatchToProps)(Title);
