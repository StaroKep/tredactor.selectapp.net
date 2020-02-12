import { connect } from 'react-redux';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selectors';

import { Author } from 'pages/Editor/parts/Author';

import { AuthorStateToProps } from './Author.types';

const mapStateToProps = (store: Store): AuthorStateToProps => {
    const userEmail = getUserEmailFromStore(store) || '';

    return {
        userEmail,
    };
};

export default connect(mapStateToProps)(Author);
