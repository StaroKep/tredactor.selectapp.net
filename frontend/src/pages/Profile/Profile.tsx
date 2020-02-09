import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';
import { Redirect } from 'react-router';

import { Account } from 'pages/Profile/parts/Account/container';
import { Menu } from 'pages/Profile/parts/Menu/container';

import { ProfileProps } from './Profile.types';
import * as styles from './Profile.scss';

const cx = cn.bind(styles);

const Profile: FunctionComponent<ProfileProps> = props => {
    const { userEmail } = props;

    if (!userEmail) {
        return <Redirect to="/login" />;
    }

    return (
        <div className={cx('root')}>
            <Menu />
            <Account />
        </div>
    );
};

export default Profile;
