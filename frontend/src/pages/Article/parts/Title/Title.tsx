import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Hr, Text } from 'components';

import { TitleProps } from './Title.types';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

export const Title: FunctionComponent<TitleProps> = props => {
    const { children } = props;

    const rootClassNames = cx('root');
    const textClassNames = cx('text');

    return (
        <div className={rootClassNames}>
            <Text className={textClassNames}>{children}</Text>
            <Hr />
        </div>
    );
};

export default Title;
