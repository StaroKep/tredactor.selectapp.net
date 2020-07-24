import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import cn from 'classnames/bind';

import { Text } from 'components/Text';

import { phrases } from './Title.config';
import { TitleProps } from './Title.types';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

export const Title: FunctionComponent<TitleProps> = props => {
    const { children } = props;

    const rootClassNames = cx('root');
    const textClassNames = cx('text');

    const textProps = {
        className: textClassNames,
        placeholderStyle: Boolean(children),
    };

    return (
        <div className={rootClassNames}>
            <Text {...textProps}>{children || phrases.titleOfTheArticle}</Text>
        </div>
    );
};

export default Title;
