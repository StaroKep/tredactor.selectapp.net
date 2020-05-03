import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

import { Store } from 'data/store/types';
import { fetchUserData } from 'data/entities/user/actions';
import { getUserEmailFromStore } from 'data/entities/user/selectors';

import { SignIn } from 'pages/SignIn';

import { SignInDispatchToProps, SignInStateToProps } from './SignIn.types';

const mapStateToProps = (store: Store): SignInStateToProps => {
    const userEmail = getUserEmailFromStore(store);

    return { userEmail };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): SignInDispatchToProps => {
    return {
        onSignInButtonClick: payload => dispatch(fetchUserData(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
