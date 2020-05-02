import { toUpper } from 'lodash';
import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { TextType } from 'enums/textType';
import { TextTag } from 'enums/textTag';

import { TextProps } from './Text.types';

import * as styles from './Text.scss';
import { TextAlign } from 'enums/textAlign';
import { TextWeight } from 'enums/textWeight';

const cx = cn.bind(styles);

export const Text: FunctionComponent<TextProps> = props => {
    const {
        className,
        children,
        type = TextType.MEDIUM,
        tag = TextTag.SPAN,
        align = TextAlign.LEFT,
        weight = TextWeight.MEDIUM,
        isUppercase = false,
        color,
    } = props;

    const classNames = cx('root', type, tag, className, align, weight, color, {
        uppercase: isUppercase,
    });

    const content = isUppercase ? toUpper(children as string) : children;

    switch (tag) {
        case TextTag.H1:
            return <h1 className={classNames}>{content}</h1>;
        case TextTag.H2:
            return <h2 className={classNames}>{content}</h2>;
        case TextTag.H3:
            return <h3 className={classNames}>{content}</h3>;
        case TextTag.H4:
            return <h4 className={classNames}>{content}</h4>;
        case TextTag.H5:
            return <h5 className={classNames}>{content}</h5>;
        case TextTag.H6:
            return <h6 className={classNames}>{content}</h6>;
        case TextTag.PARAGRAPH:
            return <p className={classNames}>{content}</p>;
        case TextTag.SPAN:
        default:
            return <span className={classNames}>{content}</span>;
    }
};

export default Text;
