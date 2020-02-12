import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
    setCurrentArticle,
    SetCurrentArticleAction,
} from 'data/entities/article/actions';

import { SaveButtonDispatchProps } from './SaveButton.types';
import { SaveButton } from 'pages/Editor/parts/SaveButton';

const mapDispatchToProps = (dispatch: Dispatch): SaveButtonDispatchProps => {
    return {
        save: (data: SetCurrentArticleAction['payload']) =>
            dispatch(setCurrentArticle(data)),
    };
};

export default connect(null, mapDispatchToProps)(SaveButton);
