import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { NoAvatar } from 'src/icons';

import { MenuProps } from './Menu.types';

import * as styles from './Menu.scss';

const cx = cn.bind(styles);

const Menu: FunctionComponent<MenuProps> = props => {
    const { userEmail } = props;
    const linkClassName = cx('link');

    const loginClassName = cx({
        [linkClassName]: true,
        login: true,
    });
    const loginComponent = (
        <Link className={loginClassName} to={userEmail ? '/profile' : '/login'}>
            <span>{userEmail || 'Login'}</span>
            <NoAvatar />
        </Link>
    );

    return (
        <div className={cx('root')}>
            <Link className={linkClassName} to="/">
                Tredactor
            </Link>
            <Link className={linkClassName} to="/editor">
                Editor
            </Link>
            <Link className={linkClassName} to="/article">
                Article
            </Link>
            {loginComponent}
        </div>
    );
};

export default Menu;
