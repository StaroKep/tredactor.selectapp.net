import React, { FunctionComponent, useEffect } from 'react';
import cn from 'classnames/bind';
import { Redirect } from 'react-router';

import { ArticlesList } from 'components';

import { Account } from './parts/Account/container';
import { Menu } from './parts/Menu/container';

import { ProfileProps } from './Profile.types';
import * as styles from './Profile.scss';

const cx = cn.bind(styles);

const Profile: FunctionComponent<ProfileProps> = props => {
    const { userEmail, userArticles, onFetchUserArticles } = props;

    useEffect(() => {
        onFetchUserArticles();
    }, []);

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
                <ArticlesList articles={userArticles} />
            </div>
        </div>
    );
};

export default Profile;
