import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames/bind';

import { Account } from 'pages/Profile/parts/Account/container';

import { ProfileProps } from './Profile.types';
import * as styles from './Profile.scss';
import { Redirect } from 'react-router';

const cx = cn.bind(styles);

const Profile: FunctionComponent<ProfileProps> = props => {
    const { userEmail, setUserData } = props;

    if (!userEmail) {
        return <Redirect to="/login" />;
    }

    const exit = useCallback(() => {
        setUserData({});
    }, []);

    return (
        <div className={cx('root')}>
            <button onClick={exit}>Exit</button>
            <Account />
        </div>
    );
};

export default Profile;
