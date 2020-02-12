import { connect } from 'react-redux';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selectors';

import { Profile } from 'pages/Profile';

import { ProfileStateToProps } from './Profile.types';

const mapStateToProps = (store: Store): ProfileStateToProps => {
    const userEmail = getUserEmailFromStore(store) || '';

    return {
        userEmail,
    };
};

export default connect(mapStateToProps)(Profile);
