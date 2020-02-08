import React, { CSSProperties, FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { NoAvatar } from 'src/icons';

import { UserAvatarProps } from './UserAvatar.types';
import * as styles from './UserAvatar.scss';

const cx = cn.bind(styles);

// const temp = 'https://png.pngtree.com/png-clipart/20190922/original/pngtree-business-male-user-avatar-vector-png-image_4774078.jpg';
const temp = '';
export const UserAvatar: FunctionComponent<UserAvatarProps> = props => {
    const { userAvatar, className } = props;

    const rootClassName = cx('root', className);

    const inlineAvatarStyles: CSSProperties = {
        backgroundImage: `url(${userAvatar || temp})`,
    };

    return (
        <div className={rootClassName}>
            <div className={cx('avatar')} style={inlineAvatarStyles} />
            <NoAvatar className={cx('no-avatar')} />
        </div>
    );
};

export default UserAvatar;
