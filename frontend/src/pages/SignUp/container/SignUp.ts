import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

import { Store } from 'data/store/types';
import { createNewUser } from 'data/entities/user/actions';
import { getUserEmailFromStore } from 'data/entities/user/selectors';

import { SignUp } from 'pages/SignUp';

import { SignUpDispatchToProps, SignUpStateToProps } from './SignUp.types';

const mapStateToProps = (store: Store): SignUpStateToProps => {
    const userEmail = getUserEmailFromStore(store);

    return { userEmail };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): SignUpDispatchToProps => {
    return {
        onSignUpButtonClick: payload => dispatch(createNewUser(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
