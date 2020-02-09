import React, { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { MenuProps } from './Menu.types';
import * as styles from './Menu.scss';

const cx = cn.bind(styles);

export const Menu: FunctionComponent<MenuProps> = props => {
    const { setUserData } = props;
    const linkClassName = cx('link');

    const logout = useCallback(() => {
        setUserData({});
    }, []);

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
            <button className={cx('logout')} onClick={logout}>
                Log out
            </button>
        </div>
    );
};

export default Menu;
