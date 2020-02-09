import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { TEXTAREA_TYPES } from 'enums';
import { Textarea, TextareaProps } from 'components/Textarea';

import * as styles from './PreText.scss';

const cx = cn.bind(styles);

const PreText: FunctionComponent = () => {
    const textareaProps: TextareaProps = {
        isSingleLine: true,
        type: TEXTAREA_TYPES.ARTICLE_PRETEXT,
        placeholder: 'Pretext',
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default PreText;
