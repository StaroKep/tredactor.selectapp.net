import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Text } from 'components';

import { RegularTextProps } from './RegularText.types';

import * as styles from './RegularText.scss';

const cx = cn.bind(styles);

export const RegularText: FunctionComponent<RegularTextProps> = props => {
    const { children } = props;

    const rootClassNames = cx('root');
    const textClassNames = cx('text');

    return (
        <div className={rootClassNames}>
            <Text className={textClassNames}>{children}</Text>
        </div>
    );
};

export default RegularText;
