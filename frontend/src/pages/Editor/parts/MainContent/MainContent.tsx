import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { Textarea, TextareaProps } from 'components/Textarea';
import { TEXTAREA_TYPES } from 'enums/Textarea';

import * as styles from './MainContent.scss';

const cx = cn.bind(styles);

const MainContent: FunctionComponent = () => {
    const textareaProps: TextareaProps = {
        isSingleLine: false,
        type: TEXTAREA_TYPES.ARTICLE_TEXT,
        placeholder: 'Text',
    };

    return (
        <div className={cx('root')}>
            <Textarea {...textareaProps} />
        </div>
    );
};

export default MainContent;
