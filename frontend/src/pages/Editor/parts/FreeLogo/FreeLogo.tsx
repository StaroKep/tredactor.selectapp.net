import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import * as styles from './FreeLogo.scss';

const cx = cn.bind(styles);

const FreeLogo: FunctionComponent = () => {
    return (
        <div className={cx('root')}>
            <div className={cx('top')}>Free</div>
            <div className={cx('middle')}>Tredactor</div>
            <div className={cx('bottom')}>Version</div>
        </div>
    );
};

export default FreeLogo;
