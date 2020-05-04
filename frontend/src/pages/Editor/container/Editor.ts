import { debounce } from 'lodash';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { Editor } from 'pages/Editor';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selectors';
import { saveCurrentArticle, setCurrentArticle } from 'data/entities/article/actions';
import { getCurrentArticle } from 'data/entities/article/selectors';

import { EditorStateToProps, EditorDispatchToProps } from './Editor.types';

const DEBOUNCE_TIMEOUT = 500;

const mapStateToProps = (store: Store): EditorStateToProps => {
    const userEmail = getUserEmailFromStore(store);
    const currentArticle = getCurrentArticle(store);

    return { userEmail, currentArticle };
};

const mapDispatchToProps = (dispatch: Dispatch): EditorDispatchToProps => {
    return {
        onSetCurrentArticle: debounce(
            payload => dispatch(setCurrentArticle(payload)),
            DEBOUNCE_TIMEOUT,
        ),
        onSaveCurrentArticle: () => dispatch(saveCurrentArticle()),
        onGoBack: () => dispatch(goBack()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
