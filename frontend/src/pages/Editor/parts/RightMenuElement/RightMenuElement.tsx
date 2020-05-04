import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { RightMenuElementProps } from './RightMenuElement.types';

import * as styles from './RightMenuElement.scss';

const cx = cn.bind(styles);

export const RightMenuElement: FunctionComponent<RightMenuElementProps> = props => {
    const { children } = props;

    const rootClassNames = cx('root');

    return <div className={rootClassNames}>{children}</div>;
};

export default RightMenuElement;
