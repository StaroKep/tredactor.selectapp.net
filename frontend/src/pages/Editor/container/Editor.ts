import { connect } from 'react-redux';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selectors';

import { Editor } from 'pages/Editor';

import { EditorStateToProps } from './Editor.types';

const mapStateToProps = (store: Store): EditorStateToProps => {
    const userEmail = getUserEmailFromStore(store) || '';

    return {
        userEmail,
    };
};

export default connect(mapStateToProps)(Editor);
