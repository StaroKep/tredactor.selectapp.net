import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { HrProps } from './Hr.types';

import * as styles from './Hr.scss';

const cx = cn.bind(styles);

export const Hr: FunctionComponent<HrProps> = () => {
    return <hr className={cx('root')} />;
};

export default Hr;
