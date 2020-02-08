import { connect } from 'react-redux';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selector';

import { Account } from 'pages/Profile/parts/Account';

import { AccountStateToProps } from './Account.types';

const mapStateToProps = (store: Store): AccountStateToProps => {
    const userEmail = getUserEmailFromStore(store) || '';

    return {
        userEmail,
    };
};

export default connect(mapStateToProps)(Account);
