import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { RightMenuProps } from './RightMenu.types';

import * as styles from './RightMenu.scss';

const cx = cn.bind(styles);

export const RightMenu: FunctionComponent<RightMenuProps> = props => {
    const { children } = props;

    const rootClassNames = cx('root');

    return <div className={rootClassNames}>{children}</div>;
};

export default RightMenu;
