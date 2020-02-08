import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { UserAvatar } from 'components/UserAvatar';

import { AccountProps } from './Account.types';
import * as styles from './Account.scss';

const cx = cn.bind(styles);

export const Account: FunctionComponent<AccountProps> = props => {
    const { userAvatar, userEmail } = props;
    return (
        <div className={cx('root')}>
            <UserAvatar userAvatar={userAvatar} />
            <div className={cx('email')}>{userEmail}</div>
        </div>
    );
};

export default Account;
