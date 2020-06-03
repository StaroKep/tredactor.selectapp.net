import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Text as BaseText } from 'components/Text';

import { phrases } from './Text.config';
import { TextProps } from './Text.types';

import * as styles from './Text.scss';

const cx = cn.bind(styles);

export const Text: FunctionComponent<TextProps> = props => {
    const { children } = props;

    const rootClassNames = cx('root');
    const textClassNames = cx('text');

    const textProps = {
        className: textClassNames,
    };

    return (
        <div className={rootClassNames}>
            <BaseText {...textProps}>{children || phrases.someText}</BaseText>
        </div>
    );
};

export default Text;
