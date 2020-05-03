import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selectors';
import { fetchUserArticlesList } from 'data/entities/article/actions';
import { getUserArticlesFromStore } from 'data/entities/article/selectors';

import { Profile } from 'pages/Profile';

import { ProfileStateToProps, ProfileDispatchToProps } from './Profile.types';

const mapStateToProps = (store: Store): ProfileStateToProps => {
    const userEmail = getUserEmailFromStore(store) || '';
    const userArticles = getUserArticlesFromStore(store);

    return {
        userEmail,
        userArticles,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): ProfileDispatchToProps => {
    return {
        onFetchUserArticles: () => dispatch(fetchUserArticlesList({})),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
