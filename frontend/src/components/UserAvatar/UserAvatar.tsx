import React, { CSSProperties, FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { NoAvatar } from 'src/icons';

import { UserAvatarProps } from './UserAvatar.types';
import * as styles from './UserAvatar.scss';

const cx = cn.bind(styles);

export const UserAvatar: FunctionComponent<UserAvatarProps> = props => {
    const { userAvatar, className } = props;

    const rootClassName = cx('root', className);

    const inlineAvatarStyles: CSSProperties = {
        backgroundImage: `url(${userAvatar})`,
    };

    return (
        <div className={rootClassName}>
            <div className={cx('avatar')} style={inlineAvatarStyles} />
            <NoAvatar className={cx('no-avatar')} />
        </div>
    );
};

export default UserAvatar;
