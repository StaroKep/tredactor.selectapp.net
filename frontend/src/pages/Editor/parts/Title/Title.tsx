import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import {TEXTAREA_TYPES} from "enums";
import { Textarea, TextareaProps } from 'components/Textarea';

import * as styles from './Title.scss';

const cx = cn.bind(styles);

const Title: FunctionComponent = () => {
    const textareaProps: TextareaProps = {
        isSingleLine: true,
        type: TEXTAREA_TYPES.ARTICLE_TITLE,
        placeholder: 'Title',
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default Title;
