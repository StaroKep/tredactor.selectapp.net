import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { AuthorProps } from './Author.types';
import * as styles from './Author.scss';
import { UserAvatar } from 'components/UserAvatar';

const cx = cn.bind(styles);

const Author: FunctionComponent<AuthorProps> = props => {
    const { userEmail, userAvatar } = props;

    return (
        <div className={cx('root')}>
            <UserAvatar className={cx('avatar')} userAvatar={userAvatar} />
            <div className={cx('user-name')}>{userEmail || 'User name'}</div>
        </div>
    );
};

export default Author;
