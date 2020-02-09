import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import * as styles from './MainContent.scss';

const cx = cn.bind(styles);

const MainContent: FunctionComponent = () => {
    return <div className={cx('root')}>MainContent</div>;
};

export default MainContent;
