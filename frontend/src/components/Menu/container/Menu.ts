import { Store } from 'data/store/types';
import { connect } from 'react-redux';
import { Menu } from '../Menu';
import { MenuStateToProps, MenuDispatchToProps } from './Menu.types';
import { getUserEmailFromStore, getUserIdFromStore } from 'data/entities/user/selectors';
import { setUserData, SetUserDataAction } from 'data/entities/user/actions';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const mapStateToProps = (store: Store): MenuStateToProps => {
    const userId = getUserIdFromStore(store);
    const userEmail = getUserEmailFromStore(store);

    return {
        userId,
        userEmail,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): MenuDispatchToProps => ({
    onSetUserData: (data: SetUserDataAction['payload']) => dispatch(setUserData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
