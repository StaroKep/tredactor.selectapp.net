import { Store } from 'data/store/types';
import { connect } from 'react-redux';
import { Menu } from 'pages/Home/parts/Menu';
import { MenuStateToProps } from './Menu.types';
import { getUserEmailFromStore } from 'data/entities/user/selector';

const mapStateToProps = (store: Store): MenuStateToProps => {
    const userEmail = getUserEmailFromStore(store);

    return {
        userEmail,
    };
};

export default connect(mapStateToProps)(Menu);
