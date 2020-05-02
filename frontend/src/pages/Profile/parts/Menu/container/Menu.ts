import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

import { setUserData, SetUserDataAction } from 'data/entities/user/actions';
import { Menu } from 'pages/Profile/parts/Menu';

import { MenuDispatchToProps } from './Menu.types';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): MenuDispatchToProps => {
    return {
        setUserData: (data: SetUserDataAction['payload']) => dispatch(setUserData(data)),
    };
};

export default connect(null, mapDispatchToProps)(Menu);
