import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';
import { Redirect } from 'react-router';

import { Account } from './parts/Account/container';
import { Menu } from './parts/Menu/container';
import { ProjectsPanel } from './parts/ProjectsPanel';

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
            <div className={cx('content')}>
                <div className={cx('UserData')}>
                    <Account />
                </div>
                <ProjectsPanel />
            </div>
        </div>
    );
};

export default Profile;
