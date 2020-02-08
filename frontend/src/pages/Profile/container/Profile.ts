import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selector';
import { setUserData, SetUserDataAction } from 'data/entities/user/actions';

import { Profile } from 'pages/Profile';

import { ProfileDispatchToProps, ProfileStateToProps } from './Profile.types';

const mapStateToProps = (store: Store): ProfileStateToProps => {
    const userEmail = getUserEmailFromStore(store) || '';

    return {
        userEmail,
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>
): ProfileDispatchToProps => {
    return {
        setUserData: (data: SetUserDataAction['payload']) =>
            dispatch(setUserData(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
