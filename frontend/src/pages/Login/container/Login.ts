import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

import { setUserData, SetUserDataAction } from 'data/entities/user/actions';
import { Store } from 'data/store/types';
import { getUserEmailFromStore } from 'data/entities/user/selector';

import {
    LoginDispatchToProps,
    LoginStateToProps,
} from 'pages/Login/container/Login.types';
import { Login } from 'pages/Login';

const mapStateToProps = (store: Store): LoginStateToProps => {
    const userEmail = getUserEmailFromStore(store);

    return { userEmail };
};

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>
): LoginDispatchToProps => {
    return {
        setUserData: (data: SetUserDataAction['payload']) =>
            dispatch(setUserData(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
