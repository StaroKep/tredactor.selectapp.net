import React, { FunctionComponent, useEffect } from 'react';
import cn from 'classnames/bind';
import { Redirect } from 'react-router';

import { Account } from './parts/Account/container';
import { MenuContainer } from 'components';

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
            <MenuContainer isProfilePage />
            <div className={cx('content')}>
                <div className={cx('UserData')}>
                    <Account />
                </div>
            </div>
        </div>
    );
};

export default Profile;
