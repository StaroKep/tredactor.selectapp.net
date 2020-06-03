import React, {FunctionComponent} from 'react';
import cn from 'classnames/bind';

import {ImageProps} from './Image.types';

import * as styles from './Image.scss';

const cx = cn.bind(styles);

export const Image: FunctionComponent<ImageProps> = props => {
    const { src } = props;
    return <div className={cx('root')}><img className={cx('image')} src={src} alt="image"/></div>;
};

export default Image;
