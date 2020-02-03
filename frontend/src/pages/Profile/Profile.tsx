import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import * as styles from './Profile.scss';

const cx = cn.bind(styles);

const Profile: FunctionComponent = () => {
    return <div className={cx('root')}>Profile page</div>;
};

export default Profile;
