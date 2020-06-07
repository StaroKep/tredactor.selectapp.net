import React, { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

import { NoAvatar } from 'src/icons';
import { Path } from 'src/configs/enums/paths';

import { MenuProps } from './Menu.types';

import * as styles from './Menu.scss';

const cx = cn.bind(styles);

export const Menu: FunctionComponent<MenuProps> = props => {
    const { isProfilePage = false, userId, userEmail, onSetUserData } = props;
    const linkClassName = cx('link');

    const loginClassName = cx({
        [linkClassName]: true,
        login: true,
    });

    const onLogOutButtonClick = useCallback(() => {
        onSetUserData({});
    }, []);

    const loginComponent = (
        <Link className={loginClassName} to={userEmail ? Path.PROFILE : Path.SIGN_IN}>
            <span>{userEmail || 'Login'}</span>
            <NoAvatar />
        </Link>
    );

    const articlesMenuElement = userId ? (
        <Link className={linkClassName} to={Path.ARTICLES.concat(`/${userId}`)}>
            Articles
        </Link>
    ) : null;

    const logOutButton = (
        <button className={cx('logout')} onClick={onLogOutButtonClick}>
            Log out
        </button>
    );

    return (
        <div className={cx('root')}>
            <Link className={linkClassName} to={Path.HOME}>
                About
            </Link>
            {articlesMenuElement}
            <Link className={linkClassName} to={Path.EDITOR}>
                Editor
            </Link>
            {isProfilePage ? logOutButton : loginComponent}
        </div>
    );
};

export default Menu;
